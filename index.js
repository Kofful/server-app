const express = require("express");
const router = require("./router");
const cors = require("cors");

require("./db/mongoose");

const app = express();

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
    if(req.path === "/pageableUser") {
        next(new Error());
    }
    else {
        next();
    }
});

app.use(router);
module.exports = app;
app.listen(3001);
