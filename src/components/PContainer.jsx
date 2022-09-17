import React from "react";

function PContainer(props) {
  const { el, setCurrentEl } = props;

  return (
    <div className="my-2">
      <button
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#ProductModal"
        onClick={()=>setCurrentEl(el)}
      >
        {el.title}
      </button>
    </div>
  );
}

export default PContainer;
