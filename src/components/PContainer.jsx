import React from "react";
import ProductModal from "./ProductModal";

function PContainer(props) {
  const { el } = props;

  return (
    <div className="my-2">
      <button
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target={`#Pid_${el.id}`}
      >
        {el.title}
      </button>
      <ProductModal el={el}/>
    </div>
  );
}

export default PContainer;
