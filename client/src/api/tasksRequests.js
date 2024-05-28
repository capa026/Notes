import axios from "./axios";

export const getNotesRequest = () => axios.get("/tasks");
export const createNotesRequest = (data) => axios.post("/tasks/new", data);
export const deleteNoteRequest = (data) => axios.delete(`/tasks/${data.id}`);
