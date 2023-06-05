import {Box, Typography, Button} from "@material-ui/core";
import { useStyles } from "../Style/HeaderStyle";
import { Navbar } from "../Navbar/Navbar";
import iconShopWhite from "../../asset/iconShopWhite.png";
import iconWomen from "../../asset/womenWhite.png";
import iconRec from "../../asset/IconRectangle.png";
import { data, dataContent, dataProduct, dataSeller } from "./data";
import { styled } from "styled-components";
import iconWomanBrown from "../../asset/womanDarkBrown.png";
import iconFil from "../../asset/iconFilter.png";
import bgImg from "../../asset/BgWomanDress.png"

const ImgStyle = styled.div`
    width: 1320px;
    height: 70px;
    .mapImg{
        height: 1005;
    }
`;
const Header = () => {
    const classes = useStyles();
    return (
        <>
           <Box className={classes.HeaderWrapper}>
            <Navbar />
            <Box className={classes.Headercontaier}>
                <Box className={classes.HeaderLeft}>
                <Typography variant="h3" component='h4' className={classes.headerTitle}>
                    Collections
                </Typography>
                <br/><br/>
                <Typography variant="h3" component='h4' className={classes.headerDesc}>
                    You can explore ans shop many differnt collection from various barands here.
                </Typography>
                <Box className={classes.decorator}>
                    <Typography variant="span" className={classes.decoratorButton}>
                        <Button className={classes.ButtonShopNow}>Shop Now</Button>
                        <img src={iconShopWhite} alt="" className={classes.decoratorImg} />
                    </Typography>
                </Box>
                </Box>
                <Box className={classes.HeaderRight}>
                    <Box className={classes.BoxImg}>
                    <img src={iconRec} alt="" className={classes.imgIconRec} />
                    <img src={iconWomen} alt="" className={classes.imgIconWoman} />
                    </Box>
                </Box>
                
            </Box>
            <Box className={classes.ContentImg}>
                {data.map((icon) => {
                        return (
                            <>
                               <ImgStyle>
                                   <img src={icon.img} alt="" className="mapImg"/>
                               </ImgStyle>
                               
                            </>
                        )
                })}
            </Box>
            <Box className={classes.ContentWrapper}>
                <Box className={classes.ContentLeft}>
                    <Typography className={classes.textContentLeft}>Explore new and popular styles</Typography>
                    <img src={iconWomanBrown} alt="" className={classes.womanBrown}/>
                    
                </Box>
                <Box className={classes.ContentRight}>
                {dataContent.map((icon) => {
                        return (
                            <>
                               <Box>
                                   <img src={icon.img} alt="" />
                                   
                               </Box>
                               
                            </>
                        )
                })}
                </Box>
            </Box>
            <Box>
                <Box className={classes.ProdcutContainer}>
                    <Typography className={classes.ProdcutText}>
                       Or subscribe to the newsletter
                    </Typography>
                </Box>
                <Box className={classes.HeaderProduct}>
                    <Box className={classes.HeaderButton}>
                        <Button className={classes.ButtonProduct}>All Products</Button>
                        <Button>T-Shirt</Button>
                        <Button>Hoodies</Button>
                        <Button>Jacket</Button>
                    </Box>
                    <Box>
                        <Button className={classes.ButtonFilter}>Filter</Button>
                        <img src={iconFil} alt="" className={classes.iconFilter} />
                    </Box>
                </Box>
                <Box className={classes.Product}>
                {dataProduct.map((icon) => {
                        return (
                            <>
                               <Box>
                                   <img src={icon.img} alt="" />
                                   <Box className={classes.textButton}>{icon.text}</Box>
                                   <Box className={classes.footerTextProduct}>
                                   <div>{icon.footerText}</div>
                                   <div>{icon.price}</div>
                                   </Box>
                               </Box>
                               
                            </>
                        )
                })}
                </Box>
                
            </Box>
            <Box >
                <img className={classes.bgImg} src={bgImg} alt="" />
            </Box>
            <Box>
                    <Typography className={classes.SellerText}>
                        Best sellers
                    </Typography>
                </Box>
                <Box>
                <Box className={classes.SellProduct}>
                    <Box className={classes.SellButton}>
                        <Button className={classes.ButtonSeller}>All Products</Button>
                        <Button>T-Shirt</Button>
                        <Button>Hoodies</Button>
                        <Button>Jacket</Button>
                    </Box>
                    <Box>
                        <Button className={classes.ButtonShowAll}>Show All</Button>
                    </Box>
                    
                </Box>
                <Box className={classes.Seller}>
                {dataSeller.map((icon) => {
                        return (
                            <>
                               <Box>
                                   <img src={icon.img} alt="" />
                                   <Box className={classes.textButton}>{icon.text}</Box>
                                   <Box className={classes.footerTextProduct}>
                                   <div>{icon.footerText}</div>
                                   <div>{icon.price}</div>
                                   </Box>
                               </Box>
                               
                            </>
                        )
                })}
                </Box>
                </Box>
        </Box>
        </>
    )
}
export {Header}