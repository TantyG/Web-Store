import { Box, Typography, Button } from "@material-ui/core";
import { useStyles } from "../Style/HeaderStyle";
import { Navbar } from "../Navbar/Navbar";
import iconShopWhite from "../../asset/iconShopWhite.png";
import iconWomen from "../../asset/womenWhite.png";
import iconRec from "../../asset/IconRectangle.png";
import {
  data,
  dataContent,
  dataFollower,
  dataIcon,
  dataProduct,
  dataSeller,
} from "./data";
import { styled } from "styled-components";
import iconWomanBrown from "../../asset/womanDarkBrown.png";
import iconFil from "../../asset/iconFilter.png";
import bgImg from "../../asset/BgWomanDress.png";
import zaraGrey from "../../asset/zaraFontGrey.png";
import zaraWhite from "../../asset/zaraFontWhite.png";
import iconPayment from "../../asset/iconsPayment.png";
import iconArrowOn from "../../asset/iconArrowOn.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import iconArrowLeft from "../../asset/iconArrowLeft.png";
import iconArrowRight from "../../asset/iconArrowRight.png"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        style={{
          ...style,
          display: "block",
          zIndex: "1",
          right: "90px",
          top: "200px",
          height: "40px",
        }}
        className={className}
        src={iconArrowRight}
        alt=""
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: "1",
          left: "5px",
          top: "200px",
          height: "40px",
        }}
        src={iconArrowLeft}
        alt=""
        onClick={onClick}
      />
    );
  }

const ImgStyle = styled.div`
  width: 1320px;
  height: 70px;
  .mapImg {
    height: 1005;
  }
`;
const Header = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box className={classes.HeaderWrapper}>
        <Navbar />
        <Box className={classes.Headercontaier}>
          <Box className={classes.HeaderLeft}>
            <Typography
              variant="h3"
              component="h4"
              className={classes.headerTitle}
            >
              Collections
            </Typography>
            <br />
            <br />
            <Typography
              variant="h3"
              component="h4"
              className={classes.headerDesc}
            >
              You can explore ans shop many differnt collection from various
              barands here.
            </Typography>
            <Box className={classes.decorator}>
              <Typography variant="span" className={classes.decoratorButton}>
                <Button className={classes.ButtonShopNow}>Shop Now</Button>
                <img
                  src={iconShopWhite}
                  alt=""
                  className={classes.decoratorImg}
                />
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
                  <img src={icon.img} alt="" className="mapImg" />
                </ImgStyle>
              </>
            );
          })}
        </Box>
        <Box className={classes.ContentWrapper}>
          <Box className={classes.ContentLeft}>
            <Typography className={classes.textContentLeft}>
              Explore new and popular styles
            </Typography>
            <img src={iconWomanBrown} alt="" className={classes.womanBrown} />
          </Box>
          <Box className={classes.ContentRight}>
            {dataContent.map((icon) => {
              return (
                <>
                  <Box>
                    <img src={icon.img} alt="" />
                  </Box>
                </>
              );
            })}
          </Box>
        </Box>
        {/* Product */}
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
              );
            })}
          </Box>
        </Box>
        <Box>
          {/* Backgorund IMG */}
          <br />
          <br />
          <br />
          <Box className={classes.divBgImg}>
            <img className={classes.bgImg} src={bgImg} alt="" />
            <img src={zaraGrey} className={classes.imgZaraGrey} alt="" />
            <img src={zaraWhite} className={classes.imgZaraWhite} alt="" />
            <Typography className={classes.bgText}>
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </Typography>
          <Button className={classes.seeButton}>See Collection</Button>
          </Box>
        </Box>
        <Box>
          <Typography className={classes.SellerText}>Best sellers</Typography>
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
            <Slider {...settings}>
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
              );
            })}
            </Slider>
            
          </Box>
        </Box>
        <br />
        <br />
        <br />
        <Box className={classes.productFollow}>
          <Box>
            <Typography className={classes.FollowerText}>
              Follow products and discounts on Instagram
            </Typography>
          </Box>
          <Box className={classes.dataFollow}>
            {dataFollower.map((icon) => {
              return (
                <>
                  <Box>
                    <img src={icon.img} alt="" />
                  </Box>
                </>
              );
            })}
          </Box>
          <Box>
            <Typography className={classes.lisaText}>@lisa.official</Typography>
          </Box>
        </Box>
        <Box className={classes.Footer}>
          <Box className={classes.footerLeft}>
            <Box className={classes.footerLeftText}>
              <Typography className={classes.footerLeftTextLisa}>Lisa</Typography>
              <Typography className={classes.footerLeftTextPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
              <Box className={classes.iconImg}>
              {dataIcon.map((icon) => {
              return (
                <>
                  <Box>
                    <img src={icon.img} alt="" />
                  </Box>
                </>
              );
            })}
              </Box>
            </Box>
          </Box>
          <Box className={classes.footerRight}>
            <Box className={classes.RightTable}>
                <Box class={classes.tableItem}>
                    <Typography className={classes.textRight}>CATALOG</Typography>
                    <Typography className={classes.textRightTable}>Necklaces</Typography>
                    <Typography className={classes.textRightTable}>Hoodies</Typography>
                    <Typography className={classes.textRightTable}>Jewelry Box</Typography>
                    <Typography className={classes.textRightTable}>T-Shirt</Typography>
                    <Typography className={classes.textRightTable}>Jacket</Typography>
                </Box>
                <Box class={classes.tableItem}>
                    <Typography className={classes.textRight}>ABOUT US</Typography>
                    <Typography className={classes.textRightTable}>Our Producers</Typography>
                    <Typography className={classes.textRightTable}>Sitemap</Typography>
                    <Typography className={classes.textRightTable}>FAQ</Typography>
                    <Typography className={classes.textRightTable}>About Us</Typography>
                    <Typography className={classes.textRightTable}>Terms & Conditions</Typography>
                </Box>
                <Box class={classes.tableItem}>
                    <Typography className={classes.textRight}>CUSTOMER SERVICES</Typography>
                    <Typography className={classes.textRightTable}>Contact Us</Typography>
                    <Typography className={classes.textRightTable}>Track Your Order</Typography>
                    <Typography className={classes.textRightTable}>Product Care & Repair</Typography>
                    <Typography className={classes.textRightTable}>Book an Appointment</Typography>
                    <Typography className={classes.textRightTable}>Shipping & Returns</Typography>
                </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.footerEnd}>
          <Typography className={classes.footerText}>
            © 2023 LISA , Inc.
          </Typography>
          <img src={iconPayment} alt="" />
          <Box className={classes.scroll}>
            <Typography className={classes.footerTextRight}>
              Scroll to top
            </Typography>
            <img src={iconArrowOn} alt="" className={classes.arrowOn} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export { Header };
