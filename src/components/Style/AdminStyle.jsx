import { makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    HeaderWrapper: {
        width: '100%',
        minHeight: "90vh",
        height: "auto"
    },
    WapperLeft:{
        float: "left",
        width: "15%",
        height: "auto",
        minHeight: "90vh",
    },
    WapperRight:{
        float: "right",
        width: "85%",
        backgroundColor: "#E5E5E5",
         height: "auto",
        minHeight: "90vh",
    },
    Content:{
        width: "100%",
        height: "auto",
        minHeight: "90vh",
        colors: "#fff",
    }
}))