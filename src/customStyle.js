export const styles = {
    "sidebar": {
        width: "20%",
        position: "absolute",
        right: "33px",
        height: "auto",
        color: "white",
        border: "1px solid violet",
        top:"25%",
        padding: "18px",
        borderRadius:"4px",
        maxWidth: "20%",
        flex: "0 0 20%"
        //  overflowY:"scroll"
    },
    "layout": {
        height: "100%", 
        zIndex: "1", 
        fontSize: "18px",
        wordWrap:"break-word",
        
    },
    "closeIcon":{
        fontSize: "large",
        position: "absolute",
        right: "0",
        right: "-10px",
        top: "10px"
    },
    "workflowList":{
        listStyleType: "none",
        paddingLeft: "0px"
    },
    "close":{
        cursor: "pointer",
        position: "absolute",
        top: "50%",
        right: "0%",
        padding: "12px 16px",
        transform: "translate(0%, -50%)"
    }
}

export const leftbar = {
    "btn": {
     background: "transparent",
    color: "white",
    border: "1px solid violet",
    borderRadius: "4px",
    padding: "8px",
    width: "100%",
    cursor: "pointer"
    },
    
    "slct": {
    //     background: "transparent",
    // color: "white",
    // border: "1px solid white",
    // borderRadius: "4px",
    // padding: "8px",
    // width: "100%!important",
        zIndex: "1",
        height: "40px",
    },
    "mainDiv": {
      //  marginTop: "180px",
        textAlign:"center", 
        border: "1px solid violet" , 
        borderRadius: "4px",
    },
    "heading": {
        color:"white"
    },
    "slctDiv": {
        width:"250px", padding:"20px"
    }
}

export const topbar = {
    "mainDiv": {
        display:"flex", marginLeft:"34%",marginTop: "30px", padding: "10px 0px", position: "absolute",
       color: "white",
       zIndex: "1"
    },
    "workflow": {
        padding:"8px 20px", border:"1px solid violet", marginLeft:"10px", color:"black", background:"white"
    },
    "workflowSelected": {
        padding:"8px 20px", border:"1px solid white", marginLeft:"10px", color:"black", background:"violet",borderRadius:"3px"
    }
}

export const indexs = {
    "leftbar": {
        position: "absolute", zIndex: "1", left: "30px",top:"25%",top:"25%",
        // maxWidth: "20%",
        flex: "0 0 20%"
    },
    "middlebar": {
        position: "absolute"
    }
}

export const rootDiv = {
    "rowWrapper": {
        display: "flex"
    }
}

//export styles;