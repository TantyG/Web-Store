import { styled } from "styled-components";

const DivStyled = styled.div`
    .headerText{
        display: flex;
        padding: 35px 60px;
    }
    .textIcon{
        margin-left: 10px;
        width: 98px;
        height: 28px;
        font-family: "Roboto";
        font-size: 24px;
        font-weight: 600;
        color: ${props => props.colorText ? props.colorText : '#CDCDCD'};
    }
`;
export const Card = ({icon, text, colorText}) => {
    return (
        <DivStyled colorText={colorText}>
            <div className="headerText">
                <img src={icon} alt="" />
                <div className="textIcon" >{text}</div>
            </div>
        </DivStyled>
    )
}