import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
  const { name, callAccepted, userVideo, myVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className="container row">
      {stream && (
        <div className="container1 col-6">
          <h1>{name || 'Name'}</h1>
          <video className="video1" playsInline muted ref={myVideo} autoPlay />
        </div>
      )}

      {callAccepted && !callEnded && (
        <div className="container2 col-6">
          <h1>{call.name || 'Name'}</h1>
          <video className="video2" playsInline ref={userVideo} autoPlay />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
