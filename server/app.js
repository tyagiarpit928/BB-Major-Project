const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

dotenv.config({ path: "./.env" });

app.use(cookieParser());
app.use(express.json());

app.use(require("./Routes/router.js"));

const PORT = process.env.PORT || 3000; // Default to port 3000 if PORT is not defined

// -----------< DATABASE Connection >------------
const DB = process.env.DATABASE;

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connection Success");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database Connection Error:", error);
  });
