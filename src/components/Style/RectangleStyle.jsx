import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    Wrapper: {
        width: "852px",
        height: "67px",
        borderRadius: "10px",
        backgroundColor: "#EEEEEE",
    },
    Content:{
        display: "flex",
        width: "100%",
    },
    WrapperLeft:{
        display: "flex",
        width: "40%",
        float: "left",
        padding: "10px 20px"
    },
    WrapperRight:{
        float: "right",
        width: "60%",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        textAlign: "center"
    },
    img:{
        width: "48px",
        height: "41px",
    },
    textLeft:{
        width: "100%",
        height: "22px",
        fontFamily: "Open Sans",
        fontWeight: "600",
        fontSize: "16px",
    },
    numberLeft:{
        width: "100%",
        height: "16px",
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: "14px",
        color: "#7B7878"
    },
    Text: {
        width: "75px",
        height: "21px",
        font: "Roboto",
        fontWeight: "500",
        fontSize: "18px",
        color: "#7B7878"
    },
    Number: {
        width: "71px",
        height: "16px",
        font: "Roboto",
        fontWeight: "500",
        fontSize: "14px",
    }
}))