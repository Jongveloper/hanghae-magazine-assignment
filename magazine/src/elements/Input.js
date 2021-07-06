import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
  //defaultProps 설정해준 값 가져오기 (2)
  const { multiLine, label, placehorder, type, _onChange, value } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placehorder={placehorder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElInput type={type} placehorder={placehorder} onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};
// defaultProps(꼭 필요한 값)만들기(1)
Input.defaultProps = {
  multiLine: false,
  label: false,
  placehorder: "텍스트를 입력해주세요.",
  type: "text",
  _onChange: () => {}, //인풋창에 들어왔을 때
  value: "",
};
// 스타일 컴포넌트 만들기(3)
const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;
