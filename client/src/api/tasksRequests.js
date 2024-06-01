import axios from "./axios";

export const getNotesRequest = () => axios.get("/tasks");
export const createNotesRequest = (data) => axios.post("/tasks/new", data);
export const deleteNoteRequest = (data) => axios.delete(`/tasks/${data.id}`);
export const updateNoteRequest = (data) => axios.put(`/tasks/${data.id}`, data);
