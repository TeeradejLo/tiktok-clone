import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ srcURL, channel, description, song, likes, messages, shares }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        //if video playing, pause it
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            //if video is paused, play it
            videoRef.current.play();
            setPlaying(true);
        }        
    }; 

    return (
        <div className = "video">
            <video  className = "video__player" 
                    loop
                    ref = {videoRef}
                    onClick = {handleVideoPress} 
                    src = {srcURL}></video>
            <VideoFooter channel = {channel} description = {description} song = {song}/>
            <VideoSidebar likes = {likes} shares = {shares} messages = {messages}/>
        </div>
    )
}

export default Video
