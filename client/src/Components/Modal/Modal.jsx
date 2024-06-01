import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary";
import { useNotes } from "../../context/Tasks";

const Modal = ({ openModal, setOpenModal, update, note }) => {
  const { createNote, updateNote } = useNotes();

  const [category, setCategory] = useState("Librerias");
  const [data, setData] = useState(
    note ? { id: note.id, title: note.title, content: note.content } : null
  );

  const handleSetCategory = (e) => {
    setData((prev) => ({
      ...prev,
      category: e.target.options[e.target.options.selectedIndex].value + "",
    }));
    setCategory(e.target.options[e.target.options.selectedIndex].value + "");
  };

  const handleSetData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
      category,
    }));
  };

  const handleClose = (e) => {
    if (e.target.classList[0] !== "modal--back") return;
    setOpenModal(false);
  };

  const handleSubmit = (e) => {
    if (data == null || !data.title) return;
    e.preventDefault();
    if (!update) {
      createNote(data);
      setOpenModal(false);
      setData(null);
      setCategory("Librerias");
    } else {
      updateNote({ id: data.id, title: data.title, content: data.content });
      setOpenModal(false);
    }
  };

  if (!openModal) return;
  return (
    <div
      className={`modal--back fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] backdrop-blur-sm flex justify-center place-items-center transition-all duration-150 `}
      onClick={(e) => handleClose(e)}
    >
      <div className="flex flex-col text-white bg-slate-900 w-3/4 max-w-96 md:w-1/3 p-5 rounded-xl shadow-xl z-50 gap-5 justify-center place-items-center">
        <div className="flex w-full">
          <h1 className="text-xl underline decoration-cyan-500">
            {!update ? "Crear Nota" : "Modificar Nota"}
          </h1>
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
          value={note && data.title}
        />
        {!update && (
          <input
            name="link"
            type="text"
            placeholder="Link"
            className="bg-transparent border rounded-md p-2 w-full"
            onChange={(e) => handleSetData(e)}
          />
        )}
        <textarea
          name="content"
          type="text"
          placeholder="Content"
          className="bg-transparent border rounded-md p-2 w-full h-[250px] resize-none"
          onChange={(e) => handleSetData(e)}
          value={note && data.content}
        />
        {!update && (
          <select
            className="text-black p-2 w-3/4 rounded"
            onChange={(e) => handleSetCategory(e)}
          >
            <option value="Librerias">Librerias</option>
            <option value="Cursos">Cursos</option>
            <option value="Utilidades">Utilidades</option>
            <option value="Databases">Databases</option>
          </select>
        )}

        <ButtonPrimary style="font-normal w-1/2" onClick={handleSubmit}>
          {!update ? "Crear" : "Modificar"}
        </ButtonPrimary>
      </div>
    </div>
  );
};
export default Modal;
