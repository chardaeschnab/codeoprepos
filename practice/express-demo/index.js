const express = require("express");
//initialize a new expres application
const app = express();
const port = 4000;
const films = [
  {
    id: 1,
    name: "A New Hope",
  },
  {
    id: 2,
    name: "Another StarWards Movie",
  },
  {
    id: 3,
    name: "Last One",
  },
];

//how we define the end points we will be listening for
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/films", (req, res) => {
  res.send(films);
});

app.get("/films/:id", (req, res) => {
  //the plus is there in order to convert it to a number (if necessary)
  const id = +req.params.id;
  const film = films.find((film) => film.id === id);
  if (!film) {
    res.status(404).send({ message: "Movie not found" });
  } else {
    res.send(film);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
