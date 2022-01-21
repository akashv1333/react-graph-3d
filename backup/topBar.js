import "./styles.css";

export default function topBar() {
    return(
       <div style={{display:"flex", marginLeft:"34%",marginTop: "30px", padding: "10px 0px", position: "absolute",
       color: "white",
       zIndex: "1"}}>
           <div style={{padding:"8px 20px", border:"1px solid white", marginLeft:"10px", color:"black", background:"violet",borderRadius:"3px"}}>Workflow View</div>
           <div style={{padding:"8px 20px", border:"1px solid violet", marginLeft:"10px",borderRadius:"3px"}}>Partner Type View</div>
           <div style={{padding:"8px 20px", border:"1px solid violet", marginLeft:"10px",borderRadius:"3px"}}>Supply Chain View</div>
       </div>
    )
}