import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "./Cookie";

import { useSelector, useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  if (is_login) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              magazine
            </Text>
          </Grid>
          <Grid is_flex>
            <Button text="내정보"></Button>
            <Button text="알림"></Button>
            {/* deleteCookie를 해도 바뀌지 않는다 왜냐하면 쿠키는 날라갔지만 데이터가 바뀐게 아니기 때문에 리렌더링이안됬기 때문이다. */}
            <Button text="로그아웃" _onClick={() => {dispatch(userActions.logOut({}))}}></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            magazine
          </Text>
        </Grid>
        <Grid is_flex>
          <Button text="로그인"></Button>
          <Button text="회원가입"></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
