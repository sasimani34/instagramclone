import React from 'react'
import { Avatar } from '@mui/material';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import './Post.css';

const Post = ({ user, postImage, likes, timestamp }) => {
  return (
    <div className="post">
    <div className="post__header">
      <div className="post__headerAuthor">
        <Avatar style={{ marginRight: "10px" }}>
          
        </Avatar>
        {user} • <span>{timestamp}</span>
      </div>
      <MoreHorizIcon />
    </div>
    <div className="post__image">
      <img src={postImage} alt="Post Image" />
    </div>
    <div className="post__footer">
      <div className="post__footerIcons">
        <div className="post__iconsMain">
          <FavoriteBorderIcon  className="postIcon" />
          <ChatBubbleOutlineIcon className="postIcon" />
          <TelegramIcon className="postIcon" />
        </div>
        <div className="post__iconSave">
          <BookmarkBorderIcon className="postIcon" />
        </div>
      </div>
      <span className='fw-bold'>{likes} likes </span>
    </div>
    <hr/>
  </div>
  )
}

export default Post