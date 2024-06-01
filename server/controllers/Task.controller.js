import db from "../DB.js";
import { TableExistenceVerification } from "../TableExistenceVerification.js";
import { createTaskTable } from "../queries.js";

export const getTask = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const response = await db.execute({
      sql: "SELECT * FROM tasks WHERE id = ?",
      args: [id],
    });

    res.status(200).json(response.rows); //This retuens an array
  } catch (error) {
    console.log(error);
  }
};

export const getTasks = async (req, res) => {
  try {
    const response = await db.execute("SELECT * FROM tasks");
    res.status(200).json(response.rows);
  } catch (error) {
    TableExistenceVerification(error, "tasks", createTaskTable, res);
  }
};

export const createTask = async (req, res) => {
  const { title, content, category, link } = req.body;

  const query =
    "INSERT INTO tasks (title, content, category, link) VALUES(?, ?, ?, ?)";

  try {
    const response = await db.execute({
      sql: query,
      args: [title, content || "", category || "", link || ""],
    });

    res.status(200).json("Task Created");
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await db.execute({
      sql: "DELETE FROM tasks WHERE id =?",
      args: [id],
    });
    res.status(200).json("Task Deleted");
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    const query = `UPDATE tasks SET title = ?, content = ? WHERE id = ?`;

    const response = await db.execute({
      sql: query,
      args: [title, content, id],
    });

    res.status(200).json("Updated...");
  } catch (error) {
    console.log(error);
  }
};
