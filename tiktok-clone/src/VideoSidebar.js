import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar({ likes, messages, shares }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {
                    liked ? (
                        <FavoriteIcon onClick = {(e) => setLiked(false)} fontSize = "large"/>
                    ) : (
                        <FavoriteBorderIcon onClick = {(e) => setLiked(true)} fontSize = "large"/>
                    )
                }
                <p>{liked ? parseInt(likes) + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <ChatBubbleOutlineIcon fontSize = "large"/>
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize = "large"/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
