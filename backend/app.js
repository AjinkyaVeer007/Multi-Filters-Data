require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const cors = require("cors");
const User = require("./userSchema");
const connectDB = require("./db");

connectDB.connect();
const app = express();

//use express and NPM libraries
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routes
//Post the data from Frontend to DB
app.post("/", async (req, res) => {
  try {
    //collect all info from frontend
    const {
      name,
      instaLink,
      ytLink,
      instaCost,
      ytCost,
      contact,
      mail,
      category,
      Gender,
      location,
    } = req.body;

    // make new entry in DB
    await User.create({
      name,
      instaLink,
      ytLink,
      instaCost,
      ytCost,
      contact,
      mail,
      category,
      Gender,
      location,
    });
  } catch (error) {
    console.log(error);
    console.log("Fail to add info in DB");
  }
});

app.listen(PORT, () => {
  console.log(`Port is running at ${PORT}`);
});
