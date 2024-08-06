import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
    {call.isReceivedCall && !callAccepted && (
    <div className="notification">
      <h1 className="form-heading">{call.name} is calling:</h1>
      <button type="button" className="form-button" onClick={answerCall}>
        Answer
      </button>
    </div>
    )}
    </>
  );
};

export default Notifications;
