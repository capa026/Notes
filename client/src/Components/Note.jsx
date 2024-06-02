import { CircleAlert, CircleCheck, Link2, XCircle } from "lucide-react";
import { useNotes } from "../context/Tasks";
import IconContainer from "./IconContainer";
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";
import { useState } from "react";
import { toast } from "sonner";

const Note = ({ note, listMode }) => {
  const { deleteNote } = useNotes();
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  const handleDelete = (n) => {
    toast("BORRAR: " + " " + n.title, {
      action: {
        label: "Si",
        onClick: () => {
          deleteNote(n);
          toast("Nota Borrada", { icon: <CircleCheck /> });
        },
      },
      cancel: {
        label: "No",
        onClick: (e) =>
          toast("Operacion cancelada", {
            icon: <CircleAlert />,
            duration: 500,
          }),
      },
    });
  };

  return (
    <div
      className={`flex flex-col rounded-lg shadow-lg shadow-[rgba(0,0,0,0.4)] bg-slate-100 hover:shadow-none ${
        listMode === "row" ? "w-40 h-40" : "w-[90%] md:w-[60%] h-32 md:h-48"
      } transition-all duration-100 overflow-hidden`}
    >
      <div className="flex justify-between items-center p-2 gap-2 bg-slate-900 hover:bg-slate-800">
        <h1
          className="font-medium underline decoration-cyan-500 text-white text-nowrap overflow-hidden text-ellipsis cursor-pointer"
          onClick={handleClick}
        >
          {note.title}
        </h1>
        <h1>
          <IconContainer
            onClick={() => handleDelete(note)}
            icon={<XCircle size={20} color="white" />}
          />
        </h1>
      </div>
      <Link to={note.link} target="_blank">
        <h1 className="flex text-sm items-center gap-1 font-medium text-cyan-500 hover:text-cyan-700 hover:bg-slate-300 text-nowrap overflow-hidden text-ellipsis p-2 cursor-pointer">
          {note.link}
        </h1>
      </Link>

      <h1
        className={`py-1 px-2 ${
          note.content ? "text-gray-600" : "text-gray-400"
        }  title line-clamp-4  bg-gray-200 h-full border-t-2 border-gray-400 leading-5`}
      >
        {note.content ? note.content : "Sin descripcion..."}
      </h1>

      <Modal
        update
        note={note}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};
export default Note;
