const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/../dist"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("https://frontend-take-home.fetchrewards.com/form", (req, res) => {
  const occupations = [
    "occupation1",
    "occupation2",
    "occupation3",
    "occupation4",
  ];

  const states = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
  ];

  res.status(200).json({ occupations, states });
});
