import "./styles.css";
import kg_data from "./kgGraphData"; //json file import
import ForceGraph3D from "react-force-graph-3d";
import { indexs } from "./customStyle";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { leftbar } from "./customStyle";
import { rootDiv } from "./customStyle";
import { useState, useRef, useMemo } from "react";

export default function KgGraph() {
  const fgRef = useRef(null); //graph Ref
  const [show_sidebar, showSidebar] = useState(false); //sidebar state
  const [workflow_type, setWorkflow_type] = useState(""); //type of state
  const [singleNodeData, setsingleNodeData] = useState(null); //single node data for sidebar component
  const [check, setCheck] = useState(false); //useMemo dependency
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [hoverNode, setHoverNode] = useState(null);
  const [linksGlobal, setLinksGlobal] = useState(null); //global link data
  const [nodesGlobal, setNodesGlobal] = useState(null); //global node data
  const [selected, setSelected] = useState(""); //dropdown 1 state
  const [selected1, setSelected1] = useState(""); //dropdown 2 state
  const [selected2, setSelected2] = useState(""); //dropdown 3 state
  const [selected3, setSelected3] = useState(""); //dropdown 4 state

  const setGlobalState = (links, nodes) => {
    setLinksGlobal(links); //set links in global state
    setNodesGlobal(nodes); //set nodes in global state
  };

  //graph filter
  const filter_graph = (node) => {
    for (let i = 0; i < nodesGlobal.length; i++) {
      if (node.id === nodesGlobal[i].id) {
        data.nodes = [];
        data.nodes.push(node);
        data.nodes.push(...node.neighbors);
      }
    }

    data.links = linksGlobal;
    let links_new = [];
    // FOR CREATING LINK____________________
    for (let i = 0; i < data.links.length; i++) {
      if (node.id === data.links[i].target.id) {
        links_new.push(data.links[i]);
      }
      if (node.id === data.links[i].source.id) {
        links_new.push(data.links[i]);
      }
    }

    data.links = [];
    data.links.push(...links_new);

    setHoverNode(node || null);
    const distance = 40;
    const distRatio = 5 + distance / Math.hypot(node.x);

    fgRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      2000 // ms transition duration
    );
  };

  const filter_graph_by_status = (node_status) => {
    data.nodes = [];
    for (let i = 0; i < nodesGlobal.length; i++) {
      if (
        nodesGlobal[i].hasOwnProperty("Name") &&
        nodesGlobal[i].Name !== "InsuranceGig"
      ) {
        if (node_status === nodesGlobal[i].Status) {
          data.nodes.push(nodesGlobal[i]);
          data.nodes.push(...nodesGlobal[i].neighbors);
        }
      }
    }

    data.links = linksGlobal;
    let links_new = [];
    // FOR CREATING LINK____________________
    for (let i = 0; i < data.nodes.length; i++) {
      for (let j = 0; j < data.links.length; j++) {
        if (data.nodes[i].id === data.links[j].source.id) {
          links_new.push(data.links[j]);
        }
      }
    }

    data.links = [];
    data.links.push(...links_new);
    setHoverNode(data.nodes || null);
    const distance = 40;
    const distRatio = 5 + distance / Math.hypot(data.nodes[0].x);

    //changing camera position
    fgRef.current.cameraPosition(
      {
        x: data.nodes[0].x * distRatio,
        y: data.nodes[0].y * distRatio,
        z: data.nodes[0].z * distRatio,
      }, // new position
      data.nodes[0], // lookAt ({ x, y, z })
      2000 // ms transition duration
    );
  };

  //Actual graph data
  const data = useMemo(() => {
    let nodes = [],
      links = [];

    if (kg_data) {
      nodes.push(...kg_data.nodes);

      nodes = nodes.map((obj, i) => ({
        ...obj,
        id: i, //add id for individual node object
        neighbors: [],
        links: [],
      }));

      for (let i = 0; i < nodes.length; i++) {
        //For Center Node
        if (nodes[i].hasOwnProperty("Name") === true) {
          if (nodes[i].Name === "InsuranceGig") {
            for (let j = 1; j < kg_data.nodes.length; j++) {
              if (
                nodes[j].hasOwnProperty("Name") &&
                nodes[j].Name !== "InsuranceGig"
              ) {
                nodes[i].neighbors.push(nodes[j]);
                nodes[j].neighbors.push(nodes[i]);
                let obj = {
                  source: nodes[j].id,
                  target: nodes[i].id,
                };

                nodes[i].links.push(obj);
                links.push(obj);
              }
            }
          } else {
            for (let j = 0; j < nodes.length; j++) {
              if (
                nodes[j].hasOwnProperty("Buyer") ||
                nodes[j].hasOwnProperty("Seller")
              ) {
                for (
                  let k = 0;
                  k < nodes[j].WorkflowImplementation.length;
                  k++
                ) {
                  if (
                    nodes[i].Name === nodes[j].WorkflowImplementation[k].Name
                  ) {
                    nodes[i].neighbors.push(nodes[j]);
                    nodes[j].neighbors.push(nodes[i]);
                    let obj = {
                      source: nodes[j].id,
                      target: nodes[i].id,
                    };

                    nodes[i].links.push(obj);
                    links.push(obj);
                  }
                }
              }
            }
          }
        }
      }

      setLinksGlobal(links); //set links in global state
      setNodesGlobal(nodes); //set node in global state

      return { nodes: nodes, links: links };
    }
  }, [check]);

  const updateHighlight = () => {
    setHighlightNodes(highlightNodes);
    setHighlightLinks(highlightLinks);
  };

  //called when node hoverd
  const handleNodeHover = (node) => {
    highlightNodes.clear();
    highlightLinks.clear();
    if (node) {
      highlightNodes.add(node);
      node.neighbors.forEach((neighbor) => highlightNodes.add(neighbor));
      node.links.forEach((link) => highlightLinks.add(link));
    }

    setHoverNode(node || null);
    updateHighlight();
  };

  //called when node click
  const handleNodeClick = (node) => {
    showSidebar(false);
    setsingleNodeData(node);
    if (node.hasOwnProperty("Name")) {
      if (node.Name === "InsuranceGig") {
        setWorkflow_type("InsuranceGig");
      } else {
        setWorkflow_type("workflow");
      }
    } else {
      setWorkflow_type("buyer_seller");
    }

    showSidebar(true);
    const distance = 40;
    const distRatio = 9 + distance / Math.hypot(node.x);

    fgRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      2000 // ms transition duration
    );
  };

  //called when option choosew from dropdown
  const handleClick = (node) => {
    setCheck((check) => check);

    if (linksGlobal !== null && nodesGlobal !== null) {
      filter_graph(node);
    }
  };

  //called when filter by status
  const handleByStatus = (status) => {
    setCheck((check) => check);

    if (linksGlobal !== null && nodesGlobal !== null) {
      filter_graph_by_status(status);
    }
  };

  //show node data when node Hovered
  const showNodeData = (node) => {
    if (node.hasOwnProperty("Workflow")) {
      if (node.Name === "InsuranceGig") {
        return `_________INSURANCE GIG________ <br/>
  
  ${node.neighbors.map((n) => {
    return `<br/>Worflow :
   ${n.Name}`;
  })} 
  `;
      }
      return `Workflow : ${node.Name} 
  <br/>
  Status : ${node.Status}
  ${node.neighbors.map((n) => {
    return n.hasOwnProperty("Seller") ? `<br/>Seller : ${n.Seller}` : ``;
  })} 
  ${node.neighbors.map((n) => {
    return n.hasOwnProperty("Buyer")
      ? `<br/>Buyer :
   ${n.Buyer}`
      : ``;
  })} `;
    } else if (node.hasOwnProperty("Buyer")) {
      return `<br/>This is ${
        node.Buyer
      } , <br/> ${node.WorkflowImplementation.map((n) => {
        return `Buyer of ${n.Name} and status is ${n.Status} <br/>`;
      })}`;
    } else if (node.hasOwnProperty("Seller")) {
      return `<br/>This is ${
        node.Seller
      } , <br/> ${node.WorkflowImplementation.map((n) => {
        return `Seller of ${n.Name} and status is ${n.Status} <br/>`;
      })}`;
    }
  };

  const GROUPS = 12;

  return (
    <>
      <div style={rootDiv.rowWrapper}>
        <div className="leftbar" style={indexs.leftbar}>
          <div style={leftbar.mainDiv}>
            <h2 style={leftbar.heading}>Filters</h2>
            <div style={leftbar.slctDiv}>
              <select
                style={leftbar.slct}
                value={selected}
                onChange={(e) => {
                  setSelected(e.target.value);

                  if (nodesGlobal !== null) {
                    for (let i = 0; i < nodesGlobal.length; i++) {
                      if (
                        parseInt(e.target.value) === parseInt(nodesGlobal[i].id)
                      ) {
                        handleClick(nodesGlobal[i]);
                      }
                    }
                  } else {
                    for (let i = 0; i < data.nodes.length; i++) {
                      if (
                        parseInt(e.target.value) === parseInt(data.nodes[i].id)
                      ) {
                        handleClick(data.nodes[i]);
                      }
                    }
                  }
                }}
              >
                <option>Choose a Workflow</option>

                {nodesGlobal !== null
                  ? nodesGlobal.map((data) =>
                      data.hasOwnProperty("Workflow") &&
                      data.Name !== "InsuranceGig" ? (
                        <>
                          <option key={data.id} value={data.id}>
                            {data.Name}
                          </option>
                        </>
                      ) : (
                        <></>
                      )
                    )
                  : data.nodes.map((data) =>
                      data.hasOwnProperty("Workflow") &&
                      data.Name !== "InsuranceGig" ? (
                        <>
                          <option key={data.id} value={data.id}>
                            {data.Name}
                          </option>
                        </>
                      ) : (
                        <></>
                      )
                    )}
              </select>
              <br />
              <br />

              <select
                value={selected3}
                style={leftbar.slct}
                onChange={(e) => {
                  setSelected3(e.target.value);

                  if (nodesGlobal !== null) {
                    for (let i = 0; i < nodesGlobal.length; i++) {
                      if (
                        parseInt(e.target.value) === parseInt(nodesGlobal[i].id)
                      ) {
                        handleClick(nodesGlobal[i]);
                      }
                    }
                  } else {
                    for (let i = 0; i < data.nodes.length; i++) {
                      if (
                        parseInt(e.target.value) === parseInt(data.nodes[i].id)
                      ) {
                        handleClick(data.nodes[i]);
                      }
                    }
                  }
                }}
              >
                <option>Choose Buyer</option>

                {nodesGlobal &&
                  nodesGlobal.map((data) =>
                    data.hasOwnProperty("Buyer") ? (
                      <>
                        <option key={data.id} value={data.id}>
                          {data.Buyer}
                        </option>
                      </>
                    ) : (
                      <></>
                    )
                  )}
              </select>
              <br />
              <br />

              <select
                value={selected2}
                style={leftbar.slct}
                onChange={(e) => {
                  setSelected2(e.target.value);

                  for (let i = 0; i < data.nodes.length; i++) {
                    if (
                      parseInt(e.target.value) === parseInt(data.nodes[i].id)
                    ) {
                      handleClick(data.nodes[i]);
                    }
                  }
                }}
              >
                <option>Choose Seller</option>

                {nodesGlobal &&
                  nodesGlobal.map((data) =>
                    data.hasOwnProperty("Seller") ? (
                      <>
                        <option key={data.id} value={data.id}>
                          {data.Seller}
                        </option>
                      </>
                    ) : (
                      <></>
                    )
                  )}
              </select>
              <br />
              <br />
              <select
                style={leftbar.slct}
                value={selected1}
                onChange={(e) => {
                  setSelected1(e.target.value);

                  if (e.target.value === "Choose Status") {
                    return;
                  } else {
                    handleByStatus(e.target.value);
                  }
                }}
              >
                <option value={null}>Choose Status</option>

                <option value="Live" key="Live">
                  Live
                </option>
                <option value="Introduced" key="Introduced">
                  Introduced
                </option>
                <option value="Testing" key="Testing">
                  Testing
                </option>
              </select>
              <br />
              <br />

              <button
                style={leftbar.btn}
                onClick={() => {
                  //Reset Data memo hook
                  setCheck((check) => !check);
                  //Reset all dropdown state
                  setSelected("");
                  setSelected1("");
                  setSelected2("");
                  setSelected3("");
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="middlebar" style={indexs.middlebar}>
          <TopBar />
          <ForceGraph3D
            className="react-graph"
            //node colour according there type
            nodeColor={(node) =>
              node.hasOwnProperty("Name") && node.Name !== "InsuranceGig"
                ? "red"
                : node.hasOwnProperty("Name") && node.Name === "InsuranceGig"
                ? "Violet"
                : node.hasOwnProperty("Buyer")
                ? "yellow"
                : "skyblue"
            }
            ref={fgRef} //graph Ref
            graphData={data} //nodes and links data
            linkOpacity={0.6} //Line opacity of links
            linkAutoColorBy={(d) => data.nodes[d.source].id % GROUPS} //link color
            linkWidth={0.6} //thickness of link
            autoPauseRedraw={true}
            linkDirectionalParticles={4} //number of partical on link
            linkDirectionalParticleWidth={(link) =>
              highlightLinks.has(link) ? 2 : 0
            } //link partical thickness
            nodeLabel={(node) => showNodeData(node)} //show tooltip no hovered node
            nodeCanvasObjectMode={(node) =>
              highlightNodes.has(node) ? "before" : undefined
            }
            onNodeHover={handleNodeHover} //called when any node hover
            nodeVal={(node) => {
              //node size according to condition match
              if (node.id < 6) {
                if (node.hasOwnProperty("Name")) {
                  if (node.Name === "InsuranceGig") {
                    //for center node
                    return 30;
                  } else return 5;
                }
              } else {
                return 0.5;
              }
            }}
            linkDirectionalArrowLength={5.5}
            linkDirectionalParticleSpeed={(d) => 20 * 0.001}
            linkDirectionalParticleColor="red"
            onNodeClick={handleNodeClick} //called when click on node
            nodeResolution={20}
          />
        </div>
      </div>
      {show_sidebar && <SideBar node={singleNodeData} type={workflow_type} />}
    </>
  );
}
