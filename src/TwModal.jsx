import React from "react";

function TwModal(props) {
  const {open, setOpen} = props
  return (
    <div className={`modal ${open ? ' show-modal' : ''}`}>
      <div className="modal-content">
        <span className="close-button" onClick={()=>setOpen(false)}>&times;</span>
        <h1>Hello, I am a modal!</h1>
      </div>
    </div>
  );
}

export default TwModal;
