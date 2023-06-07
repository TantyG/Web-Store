import { Box } from "@material-ui/core"
import { SideBar } from "../../components/SideBar/SideBar"
import { useStyles } from "../../components/Style/AdminStyle";
import { NavbarAdmin } from "../../components/NavbarAdmin/NavbarAdmin";

const LayoutAdmin = ({children}) => {
    const classes = useStyles();
    return(
        <>
        <Box className={classes.HeaderWrapper} id="HeaderWrapper">
            <Box className={classes.WapperLeft}>
                <SideBar />
            </Box>
            <Box className={classes.WapperRight}>
                <NavbarAdmin />
                <Box className={classes.Content}>
                    {children}
                </Box>
            </Box>
        </Box>
       
        </>
    )
}
export {LayoutAdmin}