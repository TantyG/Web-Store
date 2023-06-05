import { Box, Button, Toolbar, Typography} from "@material-ui/core"
import { useStyles } from "../Style/HeaderStyle";
import iconFlup from "../../asset/iconFlup.png";
import iconAcc from "../../asset/iconAccount.png";
import iconShop from "../../asset/iconShoping.png";
const Navbar = () => {
    const classes = useStyles();
    return (
        <Box position="static" className={classes.navBarHeader}> 
        <Toolbar className={classes.Toolbar}>
          <img src={iconFlup} alt="" />
          <Typography variant="h6" component="h6" className={classes.nameStore}>
            Lisa Store
          </Typography>

          <Box>
                <img src={iconAcc} alt="" />
                <Button className="buttonAcc">Account</Button>
                <img src={iconShop} alt="" />
                <Button className="buttonShop">Shoping</Button>
          </Box>
        </Toolbar>
      </Box>
    )
}
export { Navbar }