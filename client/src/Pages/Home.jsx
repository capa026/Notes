import { useEffect, useRef, useState } from "react";
import PageDefaultLayout from "../Components/PageDefaultLayout";
import { useNotes } from "../context/Tasks";
import Note from "../Components/Note";
import PageLoader from "../Components/loaders/PageLoader";
import { Columns2, Rows2, StickyNote } from "lucide-react";
import IconContainer from "../Components/IconContainer";

const Home = () => {
  const [listMode, setListMode] = useState("row");
  const [category, setCategory] = useState("Todas");

  const { notes, getNotes, trigger } = useNotes();

  const handleSetCategory = (e) => {
    setCategory(e.target.options[e.target.options.selectedIndex].value + "");
  };

  const handleSetListMode = (mode) => {
    setListMode(mode);
  };

  useEffect(() => {
    getNotes();
  }, [trigger]);

  if (!notes) return <PageLoader />;

  return (
    <PageDefaultLayout>
      <div className="flex justify-between items-center bg-white rounded-md my-6 p-2 shadow">
        <h1 className="flex gap-1 items-center text-gray-500">
          <StickyNote size={20} /> <b>Notas:</b> {notes.length}
        </h1>

        <select
          className="p-2 w-1/3 md:w-1/5 bg-slate-900 text-white cursor-pointer outline-none"
          onChange={(e) => handleSetCategory(e)}
        >
          <option value="Todas">Todas</option>
          <option value="Librerias">Librerias</option>
          <option value="Cursos">Cursos</option>
          <option value="Utilidades">Utilidades</option>
          <option value="Databases">Databases</option>
        </select>

        <div className="flex p-3 gap-2">
          <IconContainer
            icon={<Columns2 />}
            onClick={() => handleSetListMode("row")}
            className={`${
              listMode === "row" && "text-cyan-400 hover:text-cyan-500"
            }`}
          />
          <IconContainer
            icon={<Rows2 />}
            onClick={() => handleSetListMode("col")}
            className={`${
              listMode === "col" && "text-cyan-400 hover:text-cyan-500"
            }`}
          />
        </div>
      </div>
      {notes.length > 0 ? (
        <div
          className={`notesContainer flex ${
            listMode === "row" && "flex-row justify-center"
          } ${
            listMode === "col" && "flex-col items-center"
          } gap-5 py-3 flex-wrap transition-all duration-200`}
        >
          {notes.map((note) =>
            category === "Todas" ? (
              <Note key={note.id} note={note} listMode={listMode} />
            ) : (
              note.category === category && (
                <Note key={note.id} note={note} listMode={listMode} />
              )
            )
          )}
        </div>
      ) : (
        <div className="text-red-600">No hay notes para mostrar...</div>
      )}
    </PageDefaultLayout>
  );
};
export default Home;
