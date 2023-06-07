import { Box, Button, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "../Style/NavbarAdminStyle";

const NavbarAdmin = () => {
    const classes = useStyles();
    return (
        <>
        <Box position="static" className={classes.navBarHeader}> 
        <Toolbar className={classes.Toolbar}>
          <Typography variant="h6" component="h6" className={classes.nameStore}>
            Lisa Store
          </Typography>

          <Box>
                <Button className="buttonAcc">Account</Button>
                <Button className="buttonShop">Shoping</Button>
          </Box>
        </Toolbar>
      </Box>
        </>
    )
}
export { NavbarAdmin };