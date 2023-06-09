import { Box, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "../Style/NavbarAdminStyle";
import iconBell from "../../asset/ImgAdmin/iconBell.svg";
import iconDoc from "../../asset/ImgAdmin/iconDoc.svg";
import iconMan from "../../asset/ImgAdmin/iconImgMan.svg";
import iconSearch from "../../asset/ImgAdmin/iconSearch.svg";
import { styled } from "styled-components";

const DivStyled = styled.div`
    position: relative;
    input::placeholder{
        width: 100%;
        height: 21px;
        font-family: "Roboto";
        font-weight: 400;
        font-size: 18px;
        color: #7B7878;
}
`;
const NavbarAdmin = () => {
    const classes = useStyles();
    return (
        <>
        <Box position="static" className={classes.navBarHeader}> 
        <Toolbar className={classes.Toolbar}>
          <Typography variant="h6" component="h6" className={classes.nameStore}>
            Overview
          </Typography>
           <DivStyled>
            <input type="text" className={classes.inputSearch} placeholder="Search..."/>
            <img src={iconSearch} alt="" className={classes.iconSearch}/>
           </DivStyled>
          <Box className={classes.RightNav}>
            <img src={iconDoc} alt="" />
            <img src={iconBell} alt="" />
            <img src={iconMan} alt="" className={classes.imgMan} />
          </Box>
        </Toolbar>
      </Box>
        </>
    )
}
export { NavbarAdmin };