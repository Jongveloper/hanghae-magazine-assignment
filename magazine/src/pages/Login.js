import React from "react";
import { Text, Grid, Input, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

const Login = (props) => {

  console.log(getCookie('user_pwd'));
  const login = () => {

    setCookie("user_id", "jong", 3);
    setCookie("user_pwd", "pppp", 3);
  }

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={() => {
              console.log("아이디 입력했다!!!!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            _onChange={() => {
              console.log("비밀번호 입력했다!!!!");
            }}
          />
        </Grid>

        <Button
            text="로그인 하기"
            _onClick={() => {
              console.log("로그인 성공쓰!");
              deleteCookie("user_id");
            }}
            ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
