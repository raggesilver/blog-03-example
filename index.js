import cors from "cors";
import express from "express";

const app = express();
const port = 3001;

app.use(cors());

app.get("/", (_, res) => {
  return res.send("Hello, World");
});

const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 21 },
  { id: 3, name: "Charlie", age: 22 },
];

app.get("/students", (req, res) => {
  return res.json(students);
});

app.listen(port, () => console.log("App is listening on port", port));
