// resource : https://www.w3schools.com/howto/howto_js_accordion.asp

import {useState} from "react";

function Accordian() {
  const [hidden, setHidden] = useState('')
  const hdlClick = (e) => {
    setHidden(prv=> prv===''? 'hidden' : '')
  }
  return (
    <div className="mx-auto mt-3 border">
      <button className={ `w-full cursor-pointer rounded-md bg-lime-300 p-5 text-slate-700 hover:bg-lime-500 text-center ${!hidden && 'bg-pink-500 hover:bg-pink-600'}`} onClick={hdlClick}>
        Section 1
      </button>
      {/* <div className="hidden overflow-hidden bg-fuchsia-300 p-0 px-[18px]"> */}
      <div className={`${hidden} overflow-hidden bg-fuchsia-300 p-0 px-[18px]`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fuga
          autem consequatur consequuntur possimus, repellat dolorum repellendus
          earum necessitatibus incidunt beatae, adipisci nam dolore. Tenetur
          sint veritatis iusto quia est!
        </p>
      </div>
      
    </div>
  );
}

export default Accordian;
