import { Box, Button, Typography } from "@material-ui/core"
import { LayoutAdmin } from "../../components/Layout/LayoutAdmin"
import { BarChart } from "../../components/Chart/BarChart"
import { useStyles } from "../../components/Style/AdminPageStyle";
import iconSett from "../../asset/ImgAdmin/iconSett.svg";
import { Boxs } from "../../components/Boxs";
import iconPro from "../../asset/ImgAdmin/iconPro.svg";
import iconCard from "../../asset/ImgAdmin/iconCard.svg";
import iconBag from "../../asset/ImgAdmin/iconBag.svg";
import iconPrint from "../../asset/ImgAdmin/iconPrint.svg";
import { Rectangle } from "../../components/Rectangle/Rectangle";
import { Circles } from "../../components/Circles";
import iconBags from "../../asset/ImgAdmin/iconBags.svg";
import iconModel from "../../asset/ImgAdmin/iconModel.svg";
import { BarProgress } from "../../components/BarProgress/BarProgress";

const AdminPage = () => {
    const classes = useStyles();
    return (
        <>
            <LayoutAdmin>
                <Box className={classes.HeaderWrapper}>
                    <Box className={classes.Wrapper}>
                        <Box className={classes.WrapperLeft}>
                            <Box className={classes.HeaderWrapperLeft}>
                                <Box className={classes.Header}>
                                <Box className={classes.HeaderLeft}>
                                    <Typography className={classes.TextReve} >Total Revenue</Typography>
                                    <Typography className={classes.TextPrice}>$980,273.00</Typography>
                                </Box>
                                <Box className={classes.HeaderRight}>
                                    <Button className={classes.HeaderRightButton}> 
                                        This Year
                                    </Button>
                                </Box>
                            </Box>
                            </Box>
                        <BarChart asset={2/0.5} />
                        </Box>
                        <Box className={classes.WrapperRight}>
                            <Box className={classes.WrapperHeaderRight}>
                                <Box className={classes.HeaderRightText}>
                                    <Box className={classes.TextRight}>
                                        <Typography className={classes.TextCus} >Customers</Typography>
                                        <Typography className={classes.TextIn}>Information About your Customers</Typography>
                                    </Box>
                                    <Box className={classes.IconRight}>
                                        <img src={iconSett} alt="" />
                                    </Box>
                                </Box>
                                <Box className={classes.Circless}>
                                    <Circles text={"Current Customers"} percent={85} textColor="#5F27CD" progressColor="#5F27CD" />
                                    <Circles text={"New Customers"} percent={66} textColor="#6C6C6C" progressColor="#6C6C6C" />
                                    <Circles text={"Target Customers"} percent={90} textColor="#FF8918" progressColor="#FF8918"/>
                                    <Circles text={"Retarget Customers"} percent={30} textColor="#FF6F61" progressColor="#FF6F61" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.Footer}>
                        <Box className={classes.Content} >
                            <Box className={classes.ContentLeft}>
                                <Box className={classes.ContentBoxs}>
                                    <Boxs icon={iconPro} text="Total Visits" number="10.8m" />
                                    <Boxs icon={iconCard} text="Total Sales" number="100,345"/>
                                    <Boxs icon={iconBag} text="Total Made" number="$200k"/>
                                    <Boxs icon={iconPrint} font="10px" width="90px" text="Orders Completed" number="98,771"/>
                                </Box>
                                <Box className={classes.TextPro}>
                                    <Typography className={classes.TextProduct}>Top Products</Typography>
                                </Box>
                                <Box className={classes.ContentRect}>
                                    <Rectangle icon={iconBags}
                                        text="Nike Sportswear Futura Luxe"
                                        number="Pink - 50 orders"
                                        textIn="Inventory"
                                        numberIn="700"
                                        textSale="Sale"
                                        numberSale="$1,000.60"
                                        textPrice="Price"
                                        numberPrice="$1,300.92"
                                        textTo="Today"
                                        numberTo="$17,000.92"
                                    />
                                    <Rectangle icon={iconModel}
                                        text="Basic dress"
                                        number="Green - 25 orders"
                                        textIn="Inventory"
                                        numberIn="700"
                                        textSale="Sale"
                                        numberSale="$1,000.60"
                                        textPrice="Price"
                                        numberPrice="$1,300.92"
                                        textTo="Today"
                                        numberTo="$17,000.92"
                                    />
                                </Box>
                            </Box>
                            <Box className={classes.ContentRight}>
                                <Box className={classes.RightBottom}>
                                    <Box className={classes.HeaderRightTextBottom}>
                                        <Box className={classes.TextRightBottom}>
                                            <Typography className={classes.TextStats} >Stats Overview</Typography>
                                            <Typography className={classes.TextInBottom}>Information about store visits</Typography>
                                        </Box>
                                        <Box className={classes.IconRightBottom}>
                                            <img src={iconSett} alt="" />
                                        </Box>
                                    </Box>
                                    <Box className={classes.Progress}>
                                        <BarProgress height={"10px"} text="Woman" percent="63%" bgColor="#6C6C6C" progress={60}/>
                                        <BarProgress height={"10px"} text="Man" percent="88%" bgColor="#FF6B6B" progress={88}/>
                                        <BarProgress height={"10px"} text="Kids" percent="38%" bgColor="#5F27CD" progress={38} />
                                    </Box>
                                </Box>    
                            </Box>
                        </Box>
                </Box>
            </LayoutAdmin>
        </>
    )
}
export default AdminPage