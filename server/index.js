const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));