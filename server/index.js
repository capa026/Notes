import express from "express";
import sqlite3 from "sqlite3";
import db from "./DB.js";
import TaskPage from "./pages/Tasks.js";
import cors from "cors";
import { createTaskTable } from "./queries.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://carlospacheconotes.netlify.app/",
    ],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("<h1>Welcome to TASKS API</h1>");
});
app.get("/createTables", (req, res) => {
  createTaskTable();
});
app.use("/api/tasks", TaskPage);

app.listen(3000, (req, res) => {
  console.log(`Server started on port 3000`);
});
