import ProgressBar from "@ramonak/react-progress-bar"
import { styled } from "styled-components"

const DivStyled = styled.div`
    margin-top: 30px;
    .text{
        width: 48px;
        height: 16px;
        font-family: "Roboto";
        font-size: 14px;
        font-weight: 600;
        color: #535353;
    }
    .percent{
        text-align: end;
        width: 100%;
        height: 16px;
        font-family: "Roboto";
        font-size: 14px;
        font-weight: 600;
        color: #535353;
    }
`;
const BarProgress = ({text, percent, bgColor, progress, height}) => {
    return(
        <DivStyled>
            <div className="text">{text}</div>
            <ProgressBar completed={progress} height={height} customLabel=" " bgColor={bgColor}/>
            <div className="percent">{percent}</div>
          </DivStyled>
    )
}
export { BarProgress }