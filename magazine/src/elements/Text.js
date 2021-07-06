import React from "react";
import styled from "styled-components";

const Text = (props) => {
    //defaultProps를 설정해준 값 가져오기(2)
    const {children, bold, color,size} = props;
    //스타일을 담당하는 객체 만들기(4)
    const styles = {
        bold: bold,
        color: color,
        size: size,
    };
    
    return(
        <P {...styles}>
            {children}
        </P>
    )
}

//defaultProps(꼭 필요한 값) 만들기(1)
Text.defaultProps = {
    children: null,
    bold: false,
    color: "#222831",
    size: "14px",
};
// 스타일 컴포넌트 만들기 (3)
const P = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "600" : "400")};
`;

export default Text;