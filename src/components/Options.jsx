import React, {  useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';

const Options = ({ children }) => {
  const { me, callAccepted, callEnded, name, setName, leaveCall, callUser } = useContext(SocketContext);

  const [idToCall, setIdToCall] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIdToCallChange = (e) => {
    setIdToCall(e.target.value);
  };

  return (
    <div>
      <div className="o_container">
        <form className="form">
          <h2 className="form-heading">Account Info</h2>
          <input
            type="text"
            className="form-input"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <CopyToClipboard text={me}>
            <button type="button" className="form-button">Copy Your ID</button>
          </CopyToClipboard>
        </form>

        <form className="form">
          <h2 className="form-heading">Make a Call</h2>
          <input
            type="text"
            className="form-input"
            placeholder="ID to Call"
            value={idToCall}
            onChange={handleIdToCallChange}
          />
          {callAccepted && !callEnded ? (
            <button type="button" className="form-button" onClick={leaveCall}>Hang Up</button>
          ) : (
            <button type="button" className="form-button" onClick={() => callUser(idToCall)}>Call</button>
          )}
        </form>
      </div>
      
      {children}
      
     
    </div>
  );
};

export default Options;
