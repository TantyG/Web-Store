import { makeStyles} from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles(() => ({
    HeaderWrapper: {
        width: '100%',
        minHeight: "90vh",
        height: "auto"
    },
    Headercontaier: {
        minHeight: "90vh",
        height: "auto",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        padding: "20px 80px",
        backgroundColor: Theme.colors.basenav,
    },
    HeaderLeft:{
        float: "left",
        width: "50%",
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
    },
    HeaderRight:{
        float: "right",
        width: "50%",
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
    },
    BoxImg: {
        textAlign: "center"
    },
    imgIconRec: {
        width: "424px",
        height: "542px",
        position: "relative"
    },
    imgIconWoman:{
        width: "424px",
        height: "542px",
        position: "relative",
        top: "-15px",
        right: "438px",
        borderTopLeftRadius: "150px",
        borderBottomRightRadius: "150px",
    },
    headerTitle:{
        fontFamily: "Roboto",
        fontWeight: "300",
        fontSize: "74px",
        width: "360px",
        height: "55px",
        textAlign: "left",

    },
    headerDesc: {
        fontFamily: "Roboto",
        fontWeight: "300",
        fontSize: "30px",
        width: "682px",
        height: "119px"
    },
    navBarHeader: {
        backgroundColor: Theme.colors.basenav,
        padding: "0 100px",
    },
    Toolbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    },
    nameStore:{
        textAlign: "left",
        fontFamily: "AmstelvarAlpha",
        fontSize: "42px",
        fontWeight: "400",
        color: "#000000"
    },
    decoratorButton:{
        position: "relative",
        margin: "0 auto"

    },
    decoratorImg: {
        position: "absolute",
        left: "9px",
        top: "-4px"
    },
    ButtonShopNow: {
        color: "#FFF",
        width: "150px",
        height: "50px",
        backgroundColor: "#1E2832",
    },
    ContentImg: {
        display: "flex",
        padding: "10px 110px"
    },
    ContentWrapper: {
        height: "auto",
        padding: "40px 100px",
    },
    ContentLeft:{
        float: "left",
        with: "50%",
        height: "auto",
    },
    textContentLeft: {
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "34px",
        textAlign: "center",
        position: "absolute",
        transform:  "translateX(-55%) translateY(545%) rotate(-90deg)",
    },
    ContentRight: {
        float: "rigth",
        with: "50%",
        height: "auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        rowGap: "12px",
        padding: "0px 90px",

    },
    womanBrown:{
        width: "648px",
        height: "648px",
        backgroundSize: "cover"
    },
    ProdcutText:{
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: "50px",
        textAlign: "center"
    },
    HeaderProduct:{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        padding: "50px"
    },
    HeaderButton: {
        fontFamily: "Open Sans",
        fontWeight: "600",
        fontSize: "16px",
    },
    ButtonProduct:{
        color: "#000000",
        fontFamily: "Open Sans",
        fontWeight: "600",
        fontSize: "16px",
    },
    ButtonFilter:{
        width: "92px",
        height: "32px",
        padding: "5px 15px 5px 15px",
        color: "white",
        backgroundColor: "#1E2832",
        position: "relative",
        "&:before": {
            content: '"',
        }
    },
    iconFilter: {
        position: "absolute",
        transform: "translate(-89px, 10px)"
    },
    Product:{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        rowGap: "20px",
        padding: "0px 90px",
    },
    footerTextProduct:{
        display: "flex",
        width: "300px",
        justifyContent: "space-between",
    },
    textButton:{
        width: "100%",
        height: "22px",
        fontFamily: "Open Sans",
        fontWeight: "600",
        color: "#000000"
    },
    SellerText: {
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: "50px",
        textAlign: "center"
    },
    SellProduct:{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        padding: "50px"
    },
    SellButton: {
        fontFamily: "Open Sans",
        fontWeight: "600",
        fontSize: "16px",
    },
    ButtonSeller:{
        color: "#000000",
        fontFamily: "Open Sans",
        fontWeight: "600",
        fontSize: "16px",
    },
    ButtonShowAll: {
        width: "100%",
        height: "32px",
        padding: "5px 15px 5px 15px",
        color: "white",
        backgroundColor: "#1E2832",
        position: "relative",
        "&:before": {
            content: '"',
        }
    },
    Seller: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        rowGap: "20px",
        padding: "0px 90px",
    },
}))
