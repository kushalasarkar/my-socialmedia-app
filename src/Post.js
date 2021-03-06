import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Post({ username, imgName, timestamp, message, profilePic }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar"></Avatar>
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
          {/* TODO: image is coming later */}
          <div className="post__options">
            <div className="post__option">
              <ThumbUpIcon />
              <p>Like</p>
            </div>
            <div className="post__option">
              <ChatBubbleOutlineIcon />
              <p>Comment</p>
            </div>
            <div className="post__option">
              <NearMeIcon />
              <p>Share</p>
            </div>
            <div className="post__option">
              <AccountCircleIcon />
              <ExpandMoreOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
