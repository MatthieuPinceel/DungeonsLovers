import express from "express";
import userRoutes from "./routes/users.routes.js";

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});
