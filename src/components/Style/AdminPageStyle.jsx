import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
		width: "100%",
    },
    HeaderWrapper:{
        padding: "40px 70px",
    },
    Wrapper:{
        width: "100%",
        height: "585px",
        display: "flex"
    },
    HeaderWrapperLeft:{
        float: "left",
        width: "100%"
    },
    WrapperLeft:{
        width: "60%",
        height: "585px",
        borderRadius: "20px",
        backgroundColor: "#FFFFFF"
    },
    WrapperRight:{
        float: "right",
        width: "40%",
    },
    WrapperHeaderRight:{
        width: "372px",
        height: "585px",
        borderRadius: "30px",
        backgroundColor: "#FFFFFF",
        marginLeft: "40px",
    },
    Header:{
        width: "948px",
        justifyContent: "space-between",
        display: "flex",
    },
    HeaderLeft:{
        padding: "10px 30px"
    },
    HeaderRight:{
        padding: "30px"
    },
    HeaderRightButton:{
        backgroundColor: "#FFF8E5",
        width: "110px",
        height: "35px",
        borderRadius: "7px",
        fontSize: "12px",
        fontWeight: "500",
        fontFamily: "Roboto"
    },
    TextReve:{
        color: "#A7A7A7",
        fontSize: "24px",
        fontWeight: "500",
        fontFamily: "Roboto"
    },
    TextPrice:{
        color: "#000000",
        width: "203px",
        height: "42px",
        fontSize: "36px",
        fontWeight: "500",
        fontFamily: "Roboto"
    },
    Footer:{
        padding: "40px 70px",
    },
    Content:{
        width: "100%",
        height: "341px",
        display: "flex"
    },
    ContentLeft:{
        width: "60%",
        height: "auto",
        borderRadius: "20px",
        backgroundColor: "#FFFFFF",
        
    },
    ContentBoxs:{
        display: "flex"
    },
    ContentRight:{
        float: "right",
        width: "40%",
    },
    HeaderRightText:{
        display: "flex",
    },
    TextRight:{
        padding: "30px 27px"
    },
    IconRight:{
        padding: "55px 40px"
    },
    TextCus:{
        width: "148px",
        height: "35px",
        fontFamily: "Roboto",
        fontSize: "30px",
        fontWeight: "700",
    },
    TextIn:{
        width: "218px",
        height: "16px",
        fontFamily: "Roboto",
        fontSize: "14px",
        fontWeight: "600",
        color: "#A7A7A7",
        marginTop: "10px"
    },
    RightBottom:{
        width: "372px",
        height: "341px",
        borderRadius: "30px",
        backgroundColor: "#FFFFFF",
        marginLeft: "40px",
    },
    HeaderRightTextBottom:{
        display: "flex",
    },
    TextRightBottom:{
        padding: "20px 27px",
    },
    IconRightBottom:{
        padding: "40px 40px",
    },
    TextStats:{
        width: "100%",
        height: "35px",
        fontFamily: "Roboto",
        fontSize: "30px",
        fontWeight: "700",
    },
    TextInBottom:{
        width: "218px",
        height: "16px",
        fontFamily: "Roboto",
        fontSize: "14px",
        fontWeight: "600",
        color: "#A7A7A7",
        marginTop: "10px"
    },
    TextPro:{
        padding: "0px 52px",
    },
    TextProduct:{
        color: "#535353",
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: "24px",
        width: "143px",
        height: "28px"
    },
    ContentRect: {
        padding: "10px 52px",
    },
    Circless:{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        rowGap: "60px",
        columnGap: "75px", 
        padding: "20px"
    },
    Progress:{
        padding: "0px 27px",
    }
}))