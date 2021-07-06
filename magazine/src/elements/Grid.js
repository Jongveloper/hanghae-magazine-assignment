import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  // defaultProps를 설정해준 값 가져오기 (2)
  const { is_flex, width, padding, margin, bg, children } = props;
  // 스타일을 담당하는 객체를 만든다.(4)
  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>
        {/* 그리드박스 안에 오는건 차일드로 넘겨 받아야함 */}
        {children}
      </GridBox>
    </React.Fragment>
  );
};

//defaultProps(꼭 필요한 값) 만들어주고 (1)
Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
};

// 스타일드 컴포넌트 만들기 (3)
const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  //box-sizing div에 패딩까지 넓이에 포함할래? 하는거다
  box-sizing: border-box;
  //없으면 속성을 안주면 되는 것 처리할 때 -> props에 패딩이 있을 경우 패딩을 나오게해주고 없을경우 안나오게한다.
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    // 여러가지 속성이 한번에 묶여서 나와줘야하는 경우
    ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ""}
`;

export default Grid;
