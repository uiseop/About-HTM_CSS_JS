import React from "react";
import styled from "styled-components";
const Button = (props) => {
    const {text, _onClick, is_margin} = props
    return (
        <React.Fragment>
            <ElButton onClick={_onClick} is_margin={is_margin}>{text}</ElButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text:"눌러주세요",
    _onClick : () => {},
    is_margin : false,
}

const ElButton = styled.button`
    width : 100%;
    background-color : #212121;
    color : white;
    padding : 12px 9px;
    box-sizing : border-box;
    border : none;
    ${props => props.is_margin? `margin : 0px 5px`:''};
    white-space:nowrap;
`;

export default Button