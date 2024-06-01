import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/Task.controller.js";

const router = express.Router();

router.get("/:id", getTask);
router.get("/", getTasks);
router.post("/new", createTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

export default router;
