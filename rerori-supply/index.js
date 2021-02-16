const express = require("express");
const { PORT } = require("./constants");
const app = express();

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));
