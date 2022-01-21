import "./styles.css";
import {topbar} from "./customStyle";
export default function topBar() {
    return(
       <div style={topbar.mainDiv}>
           <div style={topbar.workflowSelected}>Workflow View</div>
           <div style={{padding:"8px 20px", border:"1px solid violet", marginLeft:"10px",borderRadius:"3px"}}>Partner Type View</div>
           <div style={{padding:"8px 20px", border:"1px solid violet", marginLeft:"10px",borderRadius:"3px"}}>Supply Chain View</div>
       </div>
    )
}