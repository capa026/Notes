import { XCircle } from "lucide-react";
import { useNotes } from "../context/Tasks";
import IconContainer from "./IconContainer";

const Note = ({ note, listMode }) => {
  const { deleteNote } = useNotes();

  return (
    <div
      className={`flex flex-col rounded-lg shadow-lg cursor-pointer bg-slate-100 hover:shadow-none ${
        listMode === "row" ? "w-40 h-40" : "w-[90%] md:w-[60%] h-32 md:h-48"
      } transition-shadow duration-300 overflow-hidden text`}
    >
      <div className="flex justify-between items-center p-2 gap-2">
        <h1 className="font-medium underline decoration-cyan-500 text-gray-600 text-nowrap overflow-hidden text-ellipsis">
          {note.title}
        </h1>
        <h1>
          <IconContainer
            onClick={() => deleteNote(note)}
            icon={<XCircle size={20} />}
          />
        </h1>
      </div>
      <h1 className="px-2 text-gray-500 title line-clamp-4">{note.content}</h1>
    </div>
  );
};
export default Note;
