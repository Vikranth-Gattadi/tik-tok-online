import React, { useRef, useState } from 'react'
import './Videos.css'
import VideoFooter from './VideosFooter.js'
import VideosSideBar from './VideosSideBar.js';

export default function Videos(props) {
    const videoRef = useRef("play");
    const [videoPlaying, setVideoPlaying] = useState(false);

    const handleVideoPlaying = () => {
        if (videoPlaying) { 
            setVideoPlaying(false);
            videoRef.current.pause();
        } else {
            setVideoPlaying(true);
            videoRef.current.play();
        }
    }
    return (
        <div className='videos'>
            <video loop autoPlay ref={videoRef} src={props.url} onClick={handleVideoPlaying} className="video_player" ></video>
            <VideoFooter name={props.name} desp={props.desp} song={props.song} />
            <VideosSideBar likes={props.likes} shares={props.shares} chats={props.chats} />
        </div>
    )
};