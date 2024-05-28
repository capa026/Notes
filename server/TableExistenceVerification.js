export const TableExistenceVerification = (
  error,
  tableName,
  creationFunction,
  res
) => {
  if (
    error.message == `SQLITE_UNKNOWN: SQLite error: no such table: ${tableName}`
  ) {
    creationFunction();
    res.status(200).json([]);
  } else {
    console.log(error);
  }
};
