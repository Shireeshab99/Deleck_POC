// VideoDetection.js
import React from 'react';

function Screens({ videoSrc }) {
  const videoData = {
    videoSrc: "C:/Users/shireeshab/Downloads/8486877-uhd_3840_2160_30fps.mp4"
};
 
    return (
      <><div> <h1>Video Presesntiond</h1>
      </div><div className="video-detection">
          <div className="video-section">
            <video controls>
              <source src={videoData.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="detection-section">
            {/* Detected items content goes here */}
            {/* Example: */}
            <h2>Detected Items</h2>
            <ul>
              <li>Hard hot</li>
              <li>Life Jocket</li>
              <li>Face mask</li>
            </ul>
          </div>
        </div></>
    );
}

export default Screens;
