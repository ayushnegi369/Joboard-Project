const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("../backend/models/User");
const port = 3001;

const app = express();
app.use(express.json());
app.use(cors());

// database name -> users
// cluster name -> register
mongoose.connect("mongodb://127.0.0.1:27017/users");

// login 
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email }).then((user) => {
        if (user) {
            if (user.password == password) {
                res.json("Success");
            } else {
                res.json("Password is wrong");
            }
        } else {
            res.json("No user found");
        }
    });
});

// signup
app.post("/register", (req, res) => {
    UserModel.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
