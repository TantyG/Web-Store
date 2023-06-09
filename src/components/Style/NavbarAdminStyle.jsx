import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    Toolbar:{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    },
    RightNav:{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
        width: "20%"
    },
    nameStore:{
        width: "167px",
        height: "47px",
        fontFamily: "Roboto",
        fontSize: "40px",
        fontWeight: "700",
        color: "#535353"
    },
    inputSearch:{
        width: "562px",
        height: "55px",
        borderRadius: "10px",
        border: "1px solid transparent",
        outline: "none",
        textIndent: "50px",
        
    },
    iconSearch:{
        position: "absolute",
        top: "18px",
        left: "22px"
    },
    input:{

    }
}))