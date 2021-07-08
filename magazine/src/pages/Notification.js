import React from "react";
import { Grid, Text } from "../elements";
import Card from "../components/Card";

const Notification = (props) => {
    let noti = [
        {user_name: "jong", post_id: "post1"},
        {user_name: "woo", post_id: "post2"},
        {user_name: "chu", post_id: "post3"},
        {user_name: "lee", post_id: "post4"},
    ];

    return(
        <React.Fragment>
            <Grid padding="16px" bg="#EFF6FF">
                {noti.map((n) => {
                    return <Card {...n} key={n.post_id}/>;
                })}
            </Grid>
        </React.Fragment>
    )
}

export default Notification;