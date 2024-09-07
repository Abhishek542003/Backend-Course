import dotenv from "dotenv";
import colors from "colors";
import express from "express";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
const jokes = [
  {
    id: 1,
    title: "joke 1",
    content: "I am first Joke",
  },
  {
    id: 2,
    title: "joke 2",
    content: "I am second Joke",
  },
  {
    id: 3,
    title: "joke 3",
    content: "I am third Joke",
  },
  {
    id: 4,
    title: "joke 4",
    content: "I am fourth Joke",
  },
  {
    id: 5,
    title: "joke 5",
    content: "I am fifth Joke",
  },
];

app.get("/", (req, resp) => {
  resp.send("<h1>Hello World </h1>");
});

app.get("/api/jokes", (req, resp) => {

    resp.send(jokes);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}.`.white.bgMagenta);
});
