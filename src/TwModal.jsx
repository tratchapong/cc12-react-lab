import {useState} from "react";

function TwModal() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <h2 className="text-2xl">Modal Example</h2>

      <button className="border bg-pink-500 p-2 rounded m-2 text-white" onClick={()=>setOpen(!open)}>Open Modal</button>

      <div className={`modal fixed top-0 left-0 pt-52 w-full h-full bg-[#0002] ${open ? 'scale-100': 'scale-0'}`}>
        <div class={`modal-content relative rounded-lg bg-gray-100 w-4/5 mx-auto p-6 transition-transform duration-300 ${open ? 'scale-100': 'scale-0'}`}>
          <span class="close absolute top-0 right-3 w-min text-4xl font-bold cursor-pointer" onClick={()=>setOpen(false)}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
      <h3>Some Content</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, saepe ex
        magni explicabo consequuntur, delectus ut veniam ab inventore officia
        beatae exercitationem nesciunt tempora eligendi? Voluptas modi quae
        corporis harum pariatur fuga consequuntur tempore repellendus id
        recusandae sit nihil ducimus aliquid quisquam, possimus nemo commodi
        enim qui iusto laboriosam quod.
      </p>
    </div>
  );
}

export default TwModal;
