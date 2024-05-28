import { useEffect, useState } from "react";
import PageDefaultLayout from "../Components/PageDefaultLayout";
import { useNotes } from "../context/Tasks";
import Note from "../Components/Note";
import PageLoader from "../Components/loaders/PageLoader";
import { Columns2, Rows2 } from "lucide-react";
import IconContainer from "../Components/IconContainer";
const Home = () => {
  const [listMode, setListMode] = useState("row");
  const { notes, getNotes, trigger } = useNotes();

  const handleSetListMode = (mode) => {
    setListMode(mode);
  };

  useEffect(() => {
    getNotes();
  }, [trigger]);

  if (!notes) return <PageLoader />;

  return (
    <PageDefaultLayout styles="mt-3">
      <div className="flex justify-between items-center bg-white rounded-md my-6 p-2 shadow">
        <h1 className="text-gray-500">Cantidad de notas: {notes.length}</h1>
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
          className={`flex ${listMode === "row" && "flex-row justify-center"} ${
            listMode === "col" && "flex-col items-center"
          } gap-5 py-3 flex-wrap`}
        >
          {notes.map((note) => (
            <Note key={note.id} note={note} listMode={listMode} />
          ))}
        </div>
      ) : (
        <div className="text-red-600">No hay notes para mostrar...</div>
      )}
    </PageDefaultLayout>
  );
};
export default Home;
