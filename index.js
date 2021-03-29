const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// const rootCall = (req, res) => res.send('Thanks you very much');
const users = ["Sakib", "Rakib", "Pakib", "Khabib", "Rabib", "Zakib"];
app.get("/", (req, res) => {
  const fruit = {
    product: "mango",
    price: 20,
  };
  res.send(fruit);
});
// app.get("/fruits/banana", (req, res) => {
//   res.send({ fruit: "banana", quantity: 1000, price: 10000 });
// });
app.get("/users/:id", (req, res) => {
  // console.log(req.params);
  const id = req.params.id;
  // console.log(req.query.sort);
  const name = users[id];
  res.send({ id, name });
});

//Post
app.post("/addUser", (req, res) => {
  // console.log("data recieved", req.body);
  // save to database
  const user = req.body;
  user.id = 67;
  res.send(user);
});

app.listen(3000, () => console.log("Listening to port 3000"));
