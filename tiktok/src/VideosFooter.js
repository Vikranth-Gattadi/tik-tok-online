import React from 'react'
import './VideosFooter.css'
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
export default function VideosFooter(props) {
    return (
        <div className='video-footer'>
            <div className="videofooter-text">
                <h3>@{props.name}</h3>
                <p>{props.desp} </p>
                <div className="videofooter-ticker">
                    <AudiotrackIcon className='videofooter-icon' />
                    <div id="scroll-container">
                        <div id="scroll-text">{props.song}
                        </div>
                    </div>
                </div>
            </div>
            <img className='footer-disk' src="https://media.istockphoto.com/id/481475560/vector/vinyl-record-template.jpg?s=612x612&w=0&k=20&c=fZgBryspxNnRn8qMa1mEquff_T6wENAY1HXMtNEMyh4=" alt="" />
        </div>
    )
}
