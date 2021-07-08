import React from "react";
import { Grid, Image, Text, Button } from "../elements";
import { HeartButton } from "../elements";
import {history} from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
const Post = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          {/* 차일드 칠드런으로 넘어가는 것들 */}
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.user_profile} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            {props.is_me && (<Button width="auto" padding="4px" margin="4px" _onClick={()=>{
              history.push(`/write/${props.id}`)
            }}>수정</Button>)}
            {props.is_me && (<Button 
            width="auto" 
            padding="4px" 
            margin="4px" 
            _onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                dispatch(postActions.deletePostFB(props.id));
            }}>삭제</Button>)}
            <Text>{props.insert_dt}</Text>
            
          </Grid>
        </Grid>

        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>

        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>

        <Grid padding="16px" is_flex>
          <Text bold>좋아요 {props.like_cnt}개 </Text>
          <HeartButton
            _onClick={(e) => {
              //  이벤트 캡쳐링과 버블링을 막아요!
              // 이벤트 캡쳐링, 버블링이 뭔지 검색해보기! :)
              e.preventDefault();
              e.stopPropagation();
              dispatch(postActions.toggleLikeFB(props.id));
            }}
            is_like={props.is_like}
          ></HeartButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "jong",
    user_profile: "https://avatars.githubusercontent.com/u/59111836?v=4",
  },
  image_url: "https://avatars.githubusercontent.com/u/59111836?v=4",
  contents: "재미있었던 여행",
  like_cnt: 0,
  insert_dt: "2020-05-05 10:00:00",
  is_me: false,
};

export default Post;
