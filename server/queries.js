import db from "./DB.js";

export const createTaskTable = async () => {
  const response = await db.execute(
    "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT)"
  );
  console.log(response);
};
