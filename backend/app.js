const express = require("express");

const app = express();
app.use(express.json());

const userRoutes = require("./routes/users.routes");
app.use("/api/users", userRoutes);

app.listen(3000);
