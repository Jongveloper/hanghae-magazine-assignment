import React from "react";
import { Grid, Image, Text } from "../elements";
import { HeartButton } from "../elements";

const Post = (props) => {
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
          <HeartButton></HeartButton>
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
  like_cnt: 10,
  insert_dt: "2020-05-05 10:00:00",
};

export default Post;
