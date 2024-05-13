const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded());
app.use(express.json());

const YEAR_OF_ADVENTURE = 2941;
const dwarfs = require("./data/data.json");
const dwarfsHashmap = dwarfs.reduce((result, el) => {
  result[el.id] = { ...el };
  return result;
}, {});

app.get("/quiz", (req, res) => {
  res.json({ id: randomIntFromInterval(0, dwarfs.length - 1) });
});

app.post("/check_answer", (req, res) => {
  calculateSuccess(req, res);
});

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function calculateSuccess(req, res) {
  const { id, age, name } = req.body;

  const foundDwarf = dwarfs.find((dwarf) => dwarf.id === id);

  const answerAge = isNaN(parseInt(age)) ? age.toLowerCase() : +age;

  const currectAge = foundDwarf.yearOfBirth
    ? answerAge === foundDwarf.yearOfBirth
    : answerAge === "unknown";

  if (name === foundDwarf.name && currectAge) {
    res.json({ success: 1 });
  } else {
    res.json({ success: 0 });
  }
}

app.listen(8000);
