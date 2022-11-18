const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const studRoutes = require("./routes/studentRoutes");

const app = express();

// Register View Engine
app.set("view engine", "ejs");

// => Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ limit: "50mb", extended: true })); // get form data when post
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));

// Connect to Mongodb
const dbURI =
  "mongodb+srv://arif:arepotai98@student-registration.cvv7j.mongodb.net/student-registration?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connect to db");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log(err));

// => Students Routes
app.get("/", (req, res) => {
  res.redirect("/students");
});

app.use("/students", studRoutes);
