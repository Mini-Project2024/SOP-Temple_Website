import React from 'react'
import templeVideo from "../images/TempleVideo2.mp4";

const VideoPage = () => {
  return (
    <div>
        <video className='w-full' src={templeVideo} autoPlay loop muted/>
    </div>
  )
}

export default VideoPage