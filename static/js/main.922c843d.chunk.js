(this["webpackJsonpforce-graph-transparent-background"]=this["webpackJsonpforce-graph-transparent-background"]||[]).push([[0],{135:function(e,n){},136:function(e,n){},137:function(e,n){},138:function(e,n){},139:function(e,n){},140:function(e,n){},141:function(e,n,t){"use strict";t.r(n);var i=t(9),o=t.n(i),r=t(80),a=t.n(r),s=t(22),l=t(14),c=(t(30),t(1));Object(l.a)(Array(70).keys()).map((function(e){return{id:e}})),Object(l.a)(Array(70).keys()).filter((function(e){return e})).map((function(e){return{source:e,target:Math.round(Math.random()*(e-1))}}));var u=t(20),f=t(12),d=t(10);t(15),t(26),t(31),t(39),t(51),t(55),t(52),t(134);t(43),t(53),t(54);var h,b=t(42),m=(t.p,{sidebar:{width:"20%",position:"absolute",right:"33px",height:"auto",color:"white",border:"1px solid",marginTop:"180px",padding:"18px"},layout:{height:"100%",zIndex:"1",fontSize:"22px"},closeIcon:(h={fontSize:"large",position:"absolute",right:"0"},Object(d.a)(h,"right","-10px"),Object(d.a)(h,"top","10px"),h),workflowList:{listStyleType:"none",paddingLeft:"0px"}}),p={btn:{background:"transparent",color:"white",border:"1px solid white",borderRadius:"4px",padding:"8px",width:"100%",cursor:"pointer"},slct:{zIndex:"1",height:"40px"},mainDiv:{marginTop:"180px",textAlign:"center",border:"1px solid white"},heading:{color:"white"},slctDiv:{width:"300px",padding:"20px"}},S={leftbar:{position:"absolute",zIndex:"1",left:"30px"},middlebar:{position:"absolute"}};function I(){return Object(c.jsxs)("div",{style:{display:"flex",marginLeft:"34%",marginTop:"30px",padding:"10px 0px",position:"absolute",color:"white",zIndex:"1"},children:[Object(c.jsx)("div",{style:{padding:"8px 20px",border:"1px solid",marginLeft:"10px",color:"black",background:"white"},children:"Workflow View"}),Object(c.jsx)("div",{style:{padding:"8px 20px",border:"1px solid",marginLeft:"10px"},children:"Partner Type View"}),Object(c.jsx)("div",{style:{padding:"8px 20px",border:"1px solid",marginLeft:"10px"},children:"Supply Chain View"})]})}var j=t(3),g=t(2),y=t(4),w=t(5),O=function(e){Object(y.a)(t,e);var n=Object(w.a)(t);function t(e){var i;return Object(j.a)(this,t),(i=n.call(this,e)).toggleSidebar=function(e){var n="".concat(e.currentTarget.parentNode.id,"Open");i.setState(Object(d.a)({},n,!i.state[n]))},console.log("node data",e),i.state={rightOpen:!0,workflow_type:e.type,name:e.node.Name,status:e.node.Status,neighbors:e.node.neighbors,type:e.node.Workflow,Buyer:e.node.Buyer,Seller:e.node.Seller,workflow_Implementation:e.node.WorkflowImplementation},i}return Object(g.a)(t,[{key:"RenderData",value:function(){return"workflow"===this.state.workflow_type?Object(c.jsxs)("div",{children:[Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("b",{children:"Name"})," -",this.state.name]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("b",{children:"Type"})," - ",this.state.type," "]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("b",{children:"Status"})," - ",this.state.status," "]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("b",{children:"Seller Partner(s)"})," - ",this.state.neighbors&&this.state.neighbors.map((function(e){return e.hasOwnProperty("Seller")&&e.Seller}))]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("b",{children:"Buyer Partner(s)"})," -  ",this.state.neighbors&&this.state.neighbors.map((function(e){return e.hasOwnProperty("Buyer")&&e.Buyer}))," "]})]}):"InsuranceGig"===this.state.workflow_type?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("li",{children:" Name -InsuranceGig "}),"Workflows -",this.state.neighbors&&this.state.neighbors.map((function(e){return Object(c.jsxs)("li",{style:{fontSize:"20px"},children:["-",e.Name]})}))]}):(this.state.workflow_type,Object(c.jsxs)("div",{children:[Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("b",{children:"Name"})," -",this.state.Buyer?this.state.Buyer:this.state.Seller," "]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("b",{children:"Workflows that they are a part of-"})," ",this.state.workflow_Implementation&&this.state.workflow_Implementation.map((function(e){return Object(c.jsxs)("li",{children:[" - ",e.Name," "]})}))]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("b",{children:"Line Of Business"})," - None "]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("b",{children:"Insurance Value Chain"})," - None "]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("b",{children:"Insurance Business Type"})," - None"]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("b",{children:"Technology"})," - None"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("b",{children:"Partners that they integrate with"}),"- None"]})]}))}},{key:"render",value:function(){var e=this.state.rightOpen?"true":"false";return Object(c.jsx)(c.Fragment,{children:e?Object(c.jsx)("div",{className:"sidebaar ".concat(e),style:m.sidebar,children:Object(c.jsx)("div",{id:"layout",style:m.layout,children:Object(c.jsxs)("div",{id:"right",className:e,children:[Object(c.jsx)("div",{className:"icon",onClick:this.toggleSidebar,style:m.closeIcon,children:Object(c.jsx)("span",{class:"close",children:"\u2716"})}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("ul",{style:m.workflowList,children:Object(c.jsx)(c.Fragment,{children:this.RenderData()})})})})]})})}):""})}}]),t}(o.a.Component);function k(){var e=Object(i.useRef)(null),n=Object(i.useState)(!1),t=Object(f.a)(n,2),o=(t[0],t[1]),r=Object(i.useState)(!1),a=Object(f.a)(r,2),d=a[0],h=a[1],m=Object(i.useState)(""),j=Object(f.a)(m,2),g=j[0],y=j[1],w=Object(i.useState)(null),k=Object(f.a)(w,2),N=k[0],C=k[1],x=Object(i.useState)(!1),T=Object(f.a)(x,2),v=T[0],B=T[1],W=Object(i.useState)(new Set),H=Object(f.a)(W,2),R=H[0],P=H[1],q=Object(i.useState)(new Set),G=Object(f.a)(q,2),_=G[0],M=G[1],D=Object(i.useState)(null),L=Object(f.a)(D,2),E=L[0],F=L[1],J=Object(i.useState)(null),z=Object(f.a)(J,2),A=z[0],V=z[1],Q=Object(i.useState)(null),U=Object(f.a)(Q,2),K=U[0],X=U[1],Y=Object(i.useState)(""),Z=Object(f.a)(Y,2),$=(Z[0],Z[1]),ee=Object(i.useState)(""),ne=Object(f.a)(ee,2),te=ne[0],ie=ne[1],oe=Object(i.useState)(""),re=Object(f.a)(oe,2),ae=re[0],se=re[1],le=Object(i.useState)(""),ce=Object(f.a)(le,2),ue=ce[0],fe=ce[1],de=Object(i.useState)(""),he=Object(f.a)(de,2),be=he[0],me=he[1],pe=function(e,n){V(e),X(n)};Object(i.useEffect)((function(){null!==A&&null!==K&&(console.log("UseEffect called"),console.log(A))}),[A,K]);var Se=Object(i.useMemo)((function(){var e=[],n=[];if(b){var t;console.log(b),(t=e).push.apply(t,Object(l.a)(b.nodes)),e=e.map((function(e,n){return Object(u.a)(Object(u.a)({},e),{},{id:n,neighbors:[],links:[]})}));for(var i=0;i<e.length;i++)if(!0===e[i].hasOwnProperty("Name"))if("InsuranceGig"===e[i].Name){for(var r=1;r<b.nodes.length;r++)if(e[r].hasOwnProperty("Name")&&"InsuranceGig"!==e[r].Name){e[i].neighbors.push(e[r]),e[r].neighbors.push(e[i]);var a={source:e[r].id,target:e[i].id};e[i].links.push(a),n.push(a)}}else for(var s=0;s<e.length;s++)if(e[s].hasOwnProperty("Buyer")||e[s].hasOwnProperty("Seller"))for(var c=0;c<e[s].WorkflowImplementation.length;c++)if(e[i].Name===e[s].WorkflowImplementation[c].Name){e[i].neighbors.push(e[s]),e[s].neighbors.push(e[i]);var f={source:e[s].id,target:e[i].id};e[i].links.push(f),n.push(f)}return o(!1),V(n),X(e),console.log(e),console.log(n),{nodes:e,links:n}}}),[v]),Ie=function(){P(R),M(_)},je=function(n){B((function(e){return e})),$("Workflow"),B((function(e){return e})),console.log({workflow_type:g}),null!==A&&null!==K||pe(Se.links,Se.nodes),null!==A&&null!==K&&function(n){for(var t,i=0;i<K.length;i++){var o;n.id===K[i].id&&(Se.nodes=[],Se.nodes.push(n),(o=Se.nodes).push.apply(o,Object(l.a)(n.neighbors)))}Se.links=A;for(var r=[],a=0;a<Se.links.length;a++)n.id===Se.links[a].target.id&&(console.log(Se.links[a]),r.push(Se.links[a])),n.id===Se.links[a].source.id&&(console.log(Se.links[a]),r.push(Se.links[a]));Se.links=[],(t=Se.links).push.apply(t,r),console.log("new data=>",Se),F(n||null);var s=5+40/Math.hypot(n.x);e.current.cameraPosition({x:n.x*s,y:n.y*s,z:n.z*s},n,2e3)}(n)},ge=function(n){$("Status"),B((function(e){return e})),null!==A&&null!==K||pe(Se.links,Se.nodes),null!==A&&null!==K&&function(n){var t;Se.nodes=[];for(var i=0;i<K.length;i++){var o;K[i].hasOwnProperty("Name")&&"InsuranceGig"!==K[i].Name&&n===K[i].Status&&(Se.nodes.push(K[i]),(o=Se.nodes).push.apply(o,Object(l.a)(K[i].neighbors)))}Se.links=A;for(var r=[],a=0;a<Se.nodes.length;a++)for(var s=0;s<Se.links.length;s++)Se.nodes[a].id===Se.links[s].source.id&&(console.log(Se.links[s]),r.push(Se.links[s]));Se.links=[],(t=Se.links).push.apply(t,r),console.log("new data=>",Se),F(Se.nodes||null);var c=5+40/Math.hypot(Se.nodes[0].x);e.current.cameraPosition({x:Se.nodes[0].x*c,y:Se.nodes[0].y*c,z:Se.nodes[0].z*c},Se.nodes[0],2e3)}(n)},ye=Object(i.useCallback)((function(e,n){n.beginPath(),n.arc(e.x,e.y,7,0,2*Math.PI,!1),n.fillStyle="red",n.fill()}),[E]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"rowWrapper",children:[Object(c.jsx)("div",{className:"leftbar",style:S.leftbar,children:Object(c.jsxs)("div",{style:p.mainDiv,children:[Object(c.jsx)("h2",{style:p.heading,children:"Workflow"}),Object(c.jsxs)("div",{style:p.slctDiv,children:[Object(c.jsxs)("select",{style:p.slct,value:te,onChange:function(e){if(ie(e.target.value),parseInt(e.target.value)===parseInt(100))B((function(e){return!e}));else if(null!==K)for(var n=0;n<K.length;n++)parseInt(e.target.value)===parseInt(K[n].id)&&(console.log("data to be set==>",Se),je(K[n]));else for(var t=0;t<Se.nodes.length;t++)parseInt(e.target.value)===parseInt(Se.nodes[t].id)&&(console.log("data to be set==>",Se),je(Se.nodes[t]))},children:[Object(c.jsx)("option",{children:"Choose a Workflow"}),Object(c.jsx)("option",{value:"100",children:"RESET"}),null!==K?K.map((function(e){return e.hasOwnProperty("Workflow")?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("option",{value:e.id,children:e.Name},e.id)}):Object(c.jsx)(c.Fragment,{})})):Se.nodes.map((function(e){return e.hasOwnProperty("Workflow")?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("option",{value:e.id,children:e.Name},e.id)}):Object(c.jsx)(c.Fragment,{})}))]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("select",{value:be,style:p.slct,onChange:function(e){if(me(e.target.value),parseInt(e.target.value)===parseInt(100))B((function(e){return!e}));else if(null!==K)for(var n=0;n<K.length;n++)parseInt(e.target.value)===parseInt(K[n].id)&&(console.log("data to be set==>",Se),je(K[n]));else for(var t=0;t<Se.nodes.length;t++)parseInt(e.target.value)===parseInt(Se.nodes[t].id)&&(console.log("data to be set==>",Se),je(Se.nodes[t]))},children:[Object(c.jsx)("option",{children:"Choose Buyer"}),Object(c.jsx)("option",{value:"100",children:"RESET"}),K&&K.map((function(e){return e.hasOwnProperty("Buyer")?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("option",{value:e.id,children:e.Buyer},e.id)}):Object(c.jsx)(c.Fragment,{})}))]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("select",{value:ue,style:p.slct,onChange:function(e){if(fe(e.target.value),parseInt(e.target.value)===parseInt(100))B((function(e){return!e}));else for(var n=0;n<Se.nodes.length;n++)parseInt(e.target.value)===parseInt(Se.nodes[n].id)&&je(Se.nodes[n])},children:[Object(c.jsx)("option",{children:"Choose Seller"}),Object(c.jsx)("option",{value:"100",children:"RESET"}),K&&K.map((function(e){return e.hasOwnProperty("Seller")?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("option",{value:e.id,children:e.Seller},e.id)}):Object(c.jsx)(c.Fragment,{})}))]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("select",{style:p.slct,value:ae,onChange:function(e){if(se(e.target.value),console.log(e.target.value),parseInt(e.target.value)===parseInt(100))B((function(e){return!e}));else{if("Choose Status"===e.target.value)return;ge(e.target.value)}},children:[Object(c.jsx)("option",{value:null,children:"Choose Status"}),Object(c.jsx)("option",{value:"100",children:"RESET"},"100"),Object(c.jsx)("option",{value:"Live",children:"Live"},"Live"),Object(c.jsx)("option",{value:"Introduced",children:"Introduced"},"Introduced"),Object(c.jsx)("option",{value:"Testing",children:"Testing"},"Testing")]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{style:p.btn,onClick:function(){B((function(e){return!e})),ie(""),se(""),fe(""),me("")},children:"Reset"})]})]})}),Object(c.jsxs)("div",{className:"middlebar",style:S.middlebar,children:[Object(c.jsx)(I,{}),Object(c.jsx)(s.a,{className:"react-graph",ref:e,graphData:Se,nodeAutoColorBy:function(e){return e.id%12},linkOpacity:.6,linkAutoColorBy:function(e){return Se.nodes[e.source].id%12},linkWidth:.6,autoPauseRedraw:!1,linkDirectionalParticles:4,linkDirectionalParticleWidth:function(e){return _.has(e)?1:0},nodeLabel:function(e){return e.hasOwnProperty("Workflow")?"InsuranceGig"===e.Name?"_________INSURANCE GIG________ <br/>\n\n".concat(e.neighbors.map((function(e){return"<br/>Worflow :\n ".concat(e.Name)}))," \n"):"Workflow : ".concat(e.Name," \n<br/>\nStatus : ").concat(e.Status,"\n").concat(e.neighbors.map((function(e){return e.hasOwnProperty("Buyer")?"<br/>Buyer :\n ".concat(e.Buyer):"<br/>Seller :\n  ".concat(e.Seller)}))," \n"):e.hasOwnProperty("Buyer")?"<br/>This is ".concat(e.Buyer," , <br/> ").concat(e.WorkflowImplementation.map((function(e){return"Buyer of ".concat(e.Name," and status is ").concat(e.Status," <br/>")}))):e.hasOwnProperty("Seller")?"<br/>This is ".concat(e.Seller," , <br/> ").concat(e.WorkflowImplementation.map((function(e){return"Seller of ".concat(e.Name," and status is ").concat(e.Status," <br/>")}))):void 0},nodeCanvasObject:ye,nodeCanvasObjectMode:function(e){return R.has(e)?"before":void 0},onNodeHover:function(e){R.clear(),_.clear(),e&&(R.add(e),e.neighbors.forEach((function(e){return R.add(e)})),e.links.forEach((function(e){return _.add(e)}))),F(e||null),Ie()},onLinkHover:function(e){R.clear(),_.clear(),e&&(_.add(e),R.add(e.source),R.add(e.target)),Ie()},nodeVal:function(e){return e.id<6?e.hasOwnProperty("Name")?"InsuranceGig"===e.Name?30:5:void 0:.5},linkDirectionalArrowLength:5.5,linkDirectionalParticleSpeed:function(e){return.02},linkDirectionalParticleColor:"red",onNodeClick:function(n){h(!1),C(n),n.hasOwnProperty("Name")?"InsuranceGig"===n.Name?y("InsuranceGig"):y("workflow"):y("buyer_seller"),h(!0),console.log("jsngrpah",n);var t=5+40/Math.hypot(n.x);e.current.cameraPosition({x:n.x*t,y:n.y*t,z:n.z*t},n,2e3)}}),!Se.nodes.length&&Object(c.jsx)("h2",{style:{position:"absolute",top:"50%",left:"40%",color:"white"},children:"No Result Found ! Please Reset"})]})]}),d&&Object(c.jsx)(O,{node:N,type:g})]})}var N=document.getElementById("root");a.a.render(Object(c.jsx)(i.StrictMode,{children:Object(c.jsx)(k,{})}),N)},15:function(e){e.exports=JSON.parse('[{"Cinchy Id":0,"Name":"InsuranceGig","Workflow":"InsuranceGig","Status":"Live","Description":"This is a classification workflow between Heffernan and Relativity 6","ThroughIGIG":"True"},{"Cinchy Id":1,"Name":"Heffernan<>Classification<>R6","Workflow":"Business NCCI Classification","Status":"Live","Description":"This is a classification workflow between Heffernan and Relativity 6","ThroughIGIG":"True"},{"Cinchy Id":2,"Name":"Heffernan<>Classification<>NM","Workflow":"Business NCCI Classification","Status":"Introduced","Description":"This is a classification workflow between Heffernan and NM","ThroughIGIG":"True"},{"Cinchy Id":3,"Name":"BTIS<>OCR","Workflow":"OCR-JSON","Status":"Testing","Description":"BTIS OCR","ThroughIGIG":"True"},{"Cinchy Id":4,"Name":"HawkSoft<>BP","Workflow":"Submission Quoting","Status":"Testing","Description":"HawkSoft<>BP","ThroughIGIG":"True"}]')},26:function(e){e.exports=JSON.parse('[{"Cinchy Id":1,"WorkflowImplementation":"Heffernan<>Classification<>R6","Buyer":"Heffernan","SequenceNumber":1,"Status":"Live"},{"Cinchy Id":2,"WorkflowImplementation":"Heffernan<>Classification<>NM","Buyer":"Heffernan","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":3,"WorkflowImplementation":"BTIS<>OCR","Buyer":"BTIS","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":4,"WorkflowImplementation":"HawkSoft<>BP","Buyer":"Hawksoft","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":5,"WorkflowImplementation":"Heffernan<>Classification<>NM","Buyer":"hawsKode","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":6,"WorkflowImplementation":"Heffernan<>Classification<>R6","Buyer":"NoBody","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":7,"WorkflowImplementation":"Heffernan<>Classification<>R6","Buyer":"NoBody","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":8,"WorkflowImplementation":"Heffernan<>Classification<>R6","Buyer":"NoBody_90","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":9,"WorkflowImplementation":"Heffernan<>Classification<>NM","Buyer":"NoBody_55","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":10,"WorkflowImplementation":"BTIS<>OCR","Buyer":"NoBody_1","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":11,"WorkflowImplementation":"BTIS<>OCR","Buyer":"Akash","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":12,"WorkflowImplementation":"HawkSoft<>BP","Buyer":"Garry","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":13,"WorkflowImplementation":"HawkSoft<>BP","Buyer":"Ronnel","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":13,"WorkflowImplementation":"Heffernan<>Classification<>NM","Buyer":"Ronnel","SequenceNumber":1,"Status":"Testing"}]')},30:function(e,n,t){},31:function(e){e.exports=JSON.parse('[{"Cinchy Id":1,"WorkflowImplementation":"Heffernan<>Classification<>R6","Seller":"Relativity6","SequenceNumber":1,"Status":"Live"},{"Cinchy Id":2,"WorkflowImplementation":"Heffernan<>Classification<>NM","Seller":"Neural Metrics","SequenceNumber":1,"Status":"Introduced"},{"Cinchy Id":3,"WorkflowImplementation":"BTIS<>OCR","Seller":"Sensible","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":4,"WorkflowImplementation":"HawkSoft<>BP","Seller":"Bold Penguin","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":5,"WorkflowImplementation":"HawkSoft<>BP","Seller":"Penguin_1","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":6,"WorkflowImplementation":"Heffernan<>Classification<>NM","Seller":"John","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":7,"WorkflowImplementation":"BTIS<>OCR","Seller":"Bold_1","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":8,"WorkflowImplementation":"BTIS<>OCR","Seller":"NoOne","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":9,"WorkflowImplementation":"HawkSoft<>BP","Seller":"John1","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":10,"WorkflowImplementation":"HawkSoft<>BP","Seller":"Neural","SequenceNumber":1,"Status":"Testing"}]')},39:function(e){e.exports=JSON.parse('{"nodes":[{"Cinchy Id":0,"Name":"InsuranceGig","Workflow":"InsuranceGig","Status":"Live","Description":"This is a classification workflow between Heffernan and Relativity 6","ThroughIGIG":"True"},{"Cinchy Id":1,"Name":"Heffernan<>Classification<>R6","Workflow":"Business NCCI Classification","Status":"Live","Description":"This is a classification workflow between Heffernan and Relativity 6","ThroughIGIG":"True"},{"Cinchy Id":2,"Name":"Heffernan<>Classification<>NM","Workflow":"Business NCCI Classification","Status":"Introduced","Description":"This is a classification workflow between Heffernan and NM","ThroughIGIG":"True"},{"Cinchy Id":3,"Name":"BTIS<>OCR","Workflow":"OCR-JSON","Status":"Testing","Description":"BTIS OCR","ThroughIGIG":"True"},{"Cinchy Id":4,"Name":"HawkSoft<>BP","Workflow":"Submission Quoting","Status":"Testing","Description":"HawkSoft<>BP","ThroughIGIG":"True"},{"Cinchy Id":1,"WorkflowImplementation":"Heffernan<>Classification<>R6","Seller":"Relativity6","SequenceNumber":1,"Status":"Live"},{"Cinchy Id":2,"WorkflowImplementation":"Heffernan<>Classification<>NM","Seller":"Neural Metrics","SequenceNumber":1,"Status":"Introduced"},{"Cinchy Id":3,"WorkflowImplementation":"BTIS<>OCR","Seller":"Sensible","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":4,"WorkflowImplementation":"HawkSoft<>BP","Seller":"Bold Penguin","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":5,"WorkflowImplementation":"HawkSoft<>BP","Seller":"Penguin_1","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":6,"WorkflowImplementation":"Heffernan<>Classification<>NM","Seller":"John","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":7,"WorkflowImplementation":"BTIS<>OCR","Seller":"Bold_1","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":8,"WorkflowImplementation":"BTIS<>OCR","Seller":"NoOne","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":9,"WorkflowImplementation":"HawkSoft<>BP","Seller":"John1","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":10,"WorkflowImplementation":"HawkSoft<>BP","Seller":"Neural","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":1,"WorkflowImplementation":"Heffernan<>Classification<>R6","Buyer":"Heffernan","SequenceNumber":1,"Status":"Live"},{"Cinchy Id":2,"WorkflowImplementation":"Heffernan<>Classification<>NM","Buyer":"Heffernan","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":3,"WorkflowImplementation":"BTIS<>OCR","Buyer":"BTIS","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":4,"WorkflowImplementation":"HawkSoft<>BP","Buyer":"Hawksoft","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":5,"WorkflowImplementation":"Heffernan<>Classification<>NM","Buyer":"hawsKode","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":6,"WorkflowImplementation":"Heffernan<>Classification<>R6","Buyer":"NoBody","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":7,"WorkflowImplementation":"Heffernan<>Classification<>R6","Buyer":"NoBody","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":8,"WorkflowImplementation":"Heffernan<>Classification<>R6","Buyer":"NoBody_90","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":9,"WorkflowImplementation":"Heffernan<>Classification<>NM","Buyer":"NoBody_55","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":10,"WorkflowImplementation":"BTIS<>OCR","Buyer":"NoBody_1","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":11,"WorkflowImplementation":"BTIS<>OCR","Buyer":"Akash","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":12,"WorkflowImplementation":"HawkSoft<>BP","Buyer":"Garry","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":13,"WorkflowImplementation":"HawkSoft<>BP","Buyer":"Ronnel","SequenceNumber":1,"Status":"Testing"},{"Cinchy Id":14,"WorkflowImplementation":"Heffernan<>Classification<>NM","Buyer":"Ronnel","SequenceNumber":1,"Status":"Testing"}],"links":[]}')},42:function(e){e.exports=JSON.parse('{"nodes":[{"Cinchy Id":0,"Name":"InsuranceGig","Workflow":"InsuranceGig","Description":"This is a classification workflow between Heffernan and Relativity 6","ThroughIGIG":"True"},{"Cinchy Id":1,"Name":"Heffernan<>Classification<>R6","Workflow":"Business NCCI Classification","Status":"Live","Description":"This is a classification workflow between Heffernan and Relativity 6","ThroughIGIG":"True"},{"Cinchy Id":2,"Name":"Heffernan<>Classification<>NM","Workflow":"Business NCCI Classification","Status":"Introduced","Description":"This is a classification workflow between Heffernan and NM","ThroughIGIG":"True"},{"Cinchy Id":3,"Name":"BTIS<>OCR","Workflow":"OCR-JSON","Status":"Testing","Description":"BTIS OCR","ThroughIGIG":"True"},{"Cinchy Id":4,"Name":"HawkSoft<>BP","Workflow":"Submission Quoting","Status":"Testing","Description":"HawkSoft<>BP","ThroughIGIG":"True"},{"Cinchy Id":5,"Name":"HawkSoft<>BP<>NEWW","Workflow":"Submission Quoting","Status":"Testing","Description":"HawkSoft<>BP<>NEWW","ThroughIGIG":"True"},{"Cinchy Id":1,"WorkflowImplementation":[{"Name":"Heffernan<>Classification<>R6","Status":"Live"}],"Buyer":"Heffernan","SequenceNumber":1},{"Cinchy Id":2,"WorkflowImplementation":[{"Name":"Heffernan<>Classification<>NM","Status":"Testing"}],"Buyer":"Heffernan","SequenceNumber":1},{"Cinchy Id":3,"WorkflowImplementation":[{"Name":"BTIS<>OCR","Status":"Testing"}],"Buyer":"BTIS","SequenceNumber":1},{"Cinchy Id":4,"WorkflowImplementation":[{"Name":"HawkSoft<>BP","Status":"Testing"}],"Buyer":"Hawksoft","SequenceNumber":1},{"Cinchy Id":1,"WorkflowImplementation":[{"Name":"Heffernan<>Classification<>R6","Status":"Live"}],"Seller":"Relativity6","SequenceNumber":1},{"Cinchy Id":2,"WorkflowImplementation":[{"Name":"Heffernan<>Classification<>NM","Status":"Introduced"}],"Seller":"Neural Metrics","SequenceNumber":1},{"Cinchy Id":3,"WorkflowImplementation":[{"Name":"BTIS<>OCR","Status":"Testing"},{"Name":"HawkSoft<>BP","Status":"Live"}],"Seller":"Sensible","SequenceNumber":1},{"Cinchy Id":4,"WorkflowImplementation":[{"Name":"HawkSoft<>BP","Status":"Testing"},{"Name":"BTIS<>OCR","Status":"Live"}],"Seller":"Bold Penguin","SequenceNumber":1},{"Cinchy Id":5,"WorkflowImplementation":[{"Name":"HawkSoft<>BP<>NEWW","Status":"Testing"}],"Seller":"Akash verma","SequenceNumber":1}],"links":[]}')},78:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=78},79:function(e,n){}},[[141,1,2]]]);
//# sourceMappingURL=main.922c843d.chunk.js.map