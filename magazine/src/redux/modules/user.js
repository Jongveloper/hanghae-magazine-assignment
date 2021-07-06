import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { action } from "commander";

import { auth } from "../../shared/firebase";

// action
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

//action creator            타입      파라미터
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

//initialState 만들기
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    history.push("/");
  };
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, {history}){

    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {

        console.log(user);
        
        auth.currentUser.updateProfile({
          displayName: user_name,
        }).then(()=>{
          dispatch(setUser({user_name: user_name, id: id, user_profile: ''}));
          history.push('/');
        }).catch((error) => {
          console.log(error);
        });

        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ..
      });

  }
}

//Reducer
//create action을 쓰면 중간에 단계가 하나 낀다.  액션 안에 타입이 있고 payload가 있고 payload에 우리가 보낸 데이터가 담긴다.
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }), //produce :불변성 유지 /draft: 원본값  // immer는 원본값을 복사해서 사용한다.
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// actionCreators 내보내기
const actionCreators = {
  getUser,
  logOut,
  loginAction,
  signupFB,
};

export { actionCreators };
