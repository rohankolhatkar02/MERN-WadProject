const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const mongoDB = require("./db");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
mongoDB();
app.use(express.json());

// add cors middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    }
    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    console.log("User authenticated successfully:", user);
    res.status(200).json({ message: "User authenticated successfully", redirect: "/home" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});



app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    console.log("User registered successfully:", user);
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});








// app.get("/food", async (req, res) => {
//   const fetchedData = await mongoose.connection.db.collection("food_category");
//   const allData = await fetchedData.find({}).toArray();
//   res.json({ data: allData });
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
