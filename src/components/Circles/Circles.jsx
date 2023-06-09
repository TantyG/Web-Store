import { Box } from "@material-ui/core"
import { Circle } from "react-circle"
import { styled } from "styled-components"

const DivStyled = styled.div`
  width: 130px;
  height: 130px;
  .des{
    width: 126px;
    height: 16px;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 600;
    color: #A7A7A7;
    text-align: center;
  }
`;
const Circles = ({text, percent, textColor, progressColor}) => {
    return(
        <DivStyled>
              <Circle
                progress={percent}
                animate={true} 
                animationDuration="1s" 
                responsive={true} 
                size={150} 
                lineWidth={30} 
                progressColor={progressColor} 
                bgColor="whitesmoke" 
                textColor={textColor} 
                textStyle={{
                  font: "bold 5rem Helvetica, Arial, sans-serif", 
                }}
                percentSpacing={10} 
                roundedStroke={true} 
                showPercentage={true} 
                showPercentageSymbol={true} 
              />
              <Box className="des">{text}</Box>
            </DivStyled>
    )
}
export {Circles}