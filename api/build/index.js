"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require('dotenv').config();
const pg = require('pg-promise')();
const db = pg(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const app = express();
app.get('/test', (req, res) => {
    res.send("Backend connected!");
});
app.get('/', (req, res) => {
    db.any(`SELECT * FROM users`)
        .then((data) => {
        res.send(data[0].name);
    });
});
const port = process.env.PORT || 9000;
app.listen(port);
console.log("Server started listening on port " + port);