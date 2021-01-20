const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const StretchContact = require("./contactModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const uri = process.env.MONGODB_URI;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/stretchcontactdb", { useNewUrlParser: true });

app.post("/submit", ({ body }, res) => {
    StretchContact.create(body)
        .then(reload => {
            res.redirect("/");
        })
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
