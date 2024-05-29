import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary";
import { useNotes } from "../../context/Tasks";

const Modal = ({ openModal, setOpenModal }) => {
  const { createNote } = useNotes();

  const [data, setData] = useState(null);

  const handleSetData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleClose = (e) => {
    if (e.target.classList[0] !== "modal--back") return;
    setOpenModal(false);
  };

  const handleSubmit = (e) => {
    if (data == null || !data.title || !data.content) return;
    e.preventDefault();
    createNote(data);
    setOpenModal(false);
    setData(null);
  };
  if (!openModal) return;
  return (
    <div
      className="modal--back fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] backdrop-blur-sm flex justify-center place-items-center"
      onClick={(e) => handleClose(e)}
    >
      <div className="flex flex-col text-white bg-slate-900 w-3/4 md:w-1/3 p-5 rounded-xl shadow-xl z-50 gap-5 justify-center place-items-center">
        <div className="flex w-full">
          <h1 className="text-xl underline decoration-cyan-500">Crear nota</h1>
          <div
            onClick={() => setOpenModal(false)}
            className=" text-white text-2xl cursor-pointer select-none hover:underline  ml-auto"
          >
            x
          </div>
        </div>
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="bg-transparent border rounded-md p-2 w-full"
          onChange={(e) => handleSetData(e)}
        />
        <textarea
          name="content"
          type="text"
          placeholder="Content"
          className="bg-transparent border rounded-md p-2 w-full h-1/2 resize-none"
          onChange={(e) => handleSetData(e)}
        />

        <ButtonPrimary style="font-normal w-1/2" onClick={handleSubmit}>
          Crear
        </ButtonPrimary>
      </div>
    </div>
  );
};
export default Modal;
