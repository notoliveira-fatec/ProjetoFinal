const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config({path:"variables.env"});

app.set("port", process.env.PORT);
const server = app.listen(app.get("port"), () => {
    console.log("Servidor Rodando em: http://localhost:" + server.address().port)
});