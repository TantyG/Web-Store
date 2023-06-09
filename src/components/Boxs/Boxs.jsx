import { Box, Typography } from "@material-ui/core"
import { useStyles } from "../Style/BoxsStyle";
import { styled } from "styled-components";

const StyledDiv = styled.div`
    #asa{
        width: ${props => props.width ? props.width : '66px'};
        height: 15px;
        font-family: "Roboto";
        font-size: ${props => props.font ? props.font : '13px'};
        font-weight: 600;
        color: #7B7878;
    }
`;
const Boxs = ({icon, text, number, width, font}) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.HeaderWrapper}>
                <Box className={classes.Wrapper}>
                    <Box className={classes.Content}>
                        <img src={icon} alt="" />
                        <StyledDiv font={font} width={width} className={classes.ContentText}>
                            <Typography id="asa" className={classes.Text}>{text}</Typography>
                            <Typography className={classes.Number}>{number}</Typography>
                        </StyledDiv>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export { Boxs }