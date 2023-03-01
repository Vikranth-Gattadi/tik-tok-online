import React, { useState } from 'react'
import './VideosSideBar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';

export default function VideosSideBar(props) {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
        } else {
            setLiked(true);
        }
    }
    return (
        <div className='video-sidebar'>
            <div className='sidebar-tool'>
                {liked ? (<>
                    <FavoriteIcon fontSize='large' onClick={handleLike} />
                    <p>{props.likes + 1}</p></>
                ) : (<><FavoriteBorderIcon fontSize='large' onClick={handleLike} />
                        <p>{props.likes}</p></>)}
            </div>
            <div className='sidebar-tool'>
                <ChatIcon fontSize='large' />
                <p>{props.chats}</p>
            </div>
            <div className='sidebar-tool'>
                <SendIcon fontSize='large' />
                <p>{props.shares}</p>
            </div>


        </div>
    )
}
