function TwModal(props) {
  const { open, setOpen } = props;

  return (
    <div
      className={`modal fixed top-0 left-0 pt-52 w-full h-full bg-[#0002] ${
        open ? "scale-100" : "scale-0"
      }`}
    >
      <div
        class={`modal-content relative rounded-lg bg-gray-100 w-4/5 mx-auto p-6 transition-transform duration-300 ${
          open ? "scale-100" : "scale-0"
        }`}
      >
        <span
          class="close absolute top-0 right-3 w-min text-4xl font-bold cursor-pointer"
          onClick={() => setOpen(false)}
        >
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default TwModal;
