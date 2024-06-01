import { createContext, useContext, useEffect, useState } from "react";
import {
  getNotesRequest,
  createNotesRequest,
  deleteNoteRequest,
  updateNoteRequest,
} from "../api/tasksRequests";

const NotesContext = createContext();

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("Context must be within a NotesProvider");
  return context;
};

export const NotesProvider = ({ children }) => {
  const [trigger, setTrigger] = useState(false);
  const [notes, setNotes] = useState(null);

  const createNote = async (data) => {
    try {
      const response = await createNotesRequest(data);
      setTrigger(!trigger);
    } catch (error) {
      console.log(error);
    }
  };

  const getNotes = async () => {
    try {
      const response = await getNotesRequest();
      setNotes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (data) => {
    try {
      const response = await deleteNoteRequest(data);
      setTrigger(!trigger);
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (data) => {
    try {
      const response = await updateNoteRequest(data);
      setTrigger(!trigger);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NotesContext.Provider
      value={{ notes, getNotes, createNote, deleteNote, updateNote, trigger }}
    >
      {children}
    </NotesContext.Provider>
  );
};
