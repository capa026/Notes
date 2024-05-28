import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
} from "../controllers/Task.controller.js";

const router = express.Router();

router.get("/:id", getTask);
router.get("/", getTasks);
router.post("/new", createTask);
router.delete("/:id", deleteTask);

export default router;
