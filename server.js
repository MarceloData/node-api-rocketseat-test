const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/nodeapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

require("./src/models/Product");

app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3001);
