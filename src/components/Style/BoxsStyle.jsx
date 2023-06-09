import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
		width: "100%",
    },
    HeaderWrapper:{
        padding: "29px 60px",
    },
    Wrapper:{
        width: "130px",
        height: "80px",
        borderRadius: "10px",
        backgroundColor: "#EEEEEE"
    },
    Content:{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        position: "relative",
        transform: "translate(0px, 20px)"
    },
    ContentText: {
       
    },
    Text:{
        
    },
    Number: {
        width:"40px",
        height: "15px",
        fontFamily: "Roboto",
        fontSize: "13px",
        fontWeight: "500",
        color: "#7B7878"
    }
}))