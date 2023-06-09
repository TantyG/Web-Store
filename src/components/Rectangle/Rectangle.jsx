import { styled } from "styled-components";
import { useStyles } from "../Style/RectangleStyle";
import { Box, Typography } from "@material-ui/core";

const StyledDiv = styled.div`
    padding: 5px 0px;
`;
const Rectangle = ({icon, text, number, textIn, textSale, textPrice, textTo, numberIn, numberSale, numberPrice, numberTo}) => {
    const classes = useStyles();
    return (
        <StyledDiv>
            <Box className={classes.Wrapper}>
                <Box className={classes.Content}>
                    <Box className={classes.WrapperLeft}>
                        <img src={icon} alt="" className={classes.img} />
                        <Box>
                            <Typography className={classes.textLeft}>{text}</Typography>
                            <Typography className={classes.numberLeft}>{number}</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.WrapperRight}>
                    <Box>
                        <Typography className={classes.Text}>{textIn}</Typography>
                        <Typography className={classes.Number}>{numberIn}</Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.Text}>{textSale}</Typography>
                        <Typography className={classes.Number}>{numberSale}</Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.Text}>{textPrice}</Typography>
                        <Typography className={classes.Number}>{numberPrice}</Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.Text}>{textTo}</Typography>
                        <Typography className={classes.Number}>{numberTo}</Typography>
                    </Box>
                    </Box>
                </Box>
                
            </Box>
        </StyledDiv>
    )
}
export { Rectangle}