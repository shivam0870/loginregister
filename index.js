import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

mongoose.connect(
  "mongodb://127.0.0.1:27017/Loginrtegister",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected Successfully");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({email: email}, (err, user) => {
    if(user){
      if(password === user.password){
        res.send({message: "Login Successfull", user: user})
      }else {
        res.send({message: "Password Didn't matched." })
      }
    }else {
      res.send({message: "User Not Found!"})
    }
  })
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User Already Registered" });
    } else {
      const user = new User({
        name: name,
        email: email,
        password: password,
      });

      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered!" });
        }
      });
    }
  });
});

app.listen(9002, () => {
  console.log("app started on port 9002");
});
