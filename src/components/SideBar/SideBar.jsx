import { Box, Typography } from "@material-ui/core";
import { useStyles } from "../Style/SideBarStyle";
import { Card } from "../Card/Card";
import iconDashboard from "../../asset/ImgAdmin/iconDashboard.svg";
import { NavLink } from "react-router-dom";
import iconProduct from "../../asset/ImgAdmin/iconProduct.svg";
import iconCustomers from "../../asset/ImgAdmin/iconCustomers.svg";
import iconOrders from "../../asset/ImgAdmin/iconOrder.svg";
import iconShipment from "../../asset/ImgAdmin/iconShipment.svg";
import iconTrans from "../../asset/ImgAdmin/iconTrans.svg";
import iconSetting from "../../asset/ImgAdmin/iconSetting.svg";
import iconLogout from "../../asset/ImgAdmin/iconLogout.svg";

const SideBar = () => {
    const classes = useStyles();
    return(
        <>
            <Box className={classes.HeaderSideBar}>
                <Typography className={classes.TextHeader}>Lisa Admin</Typography>
                <NavLink to="/admin">
                   <Card icon={iconDashboard} text={"Dashboard"} colorText="#FF6F61"/>
                </NavLink>
                <NavLink to="/product">
                   <Card  icon={iconProduct} text={"Product"} />
                </NavLink>
                <NavLink to="/customer">
                    <Card icon={iconCustomers} text={"Customers"} />
                </NavLink>
                <NavLink to="/order">
                    <Card icon={iconOrders} text={"Orders"} />
                </NavLink>
                <NavLink>
                   <Card icon={iconShipment} text={"Shipment"} />
                </NavLink>
                <NavLink>
                    <Card icon={iconTrans} text={"Transactions"} />
                </NavLink>
                <NavLink>
                    <Card icon={iconSetting} text={"Settings"} />
                </NavLink>
                <NavLink>
                    <Card icon={iconLogout} text={"Logout"} />
                </NavLink>
            </Box> 
        </>
    )
}
export {SideBar}