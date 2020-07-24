const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb+srv://deploynodeapi:deploynodeapi@cluster0.3s4iy.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

require("./src/models/Product");

app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3001);
