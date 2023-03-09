import express from "express";
import usersRouter from "./Routes/users.routes.js";
import adoptsRouter from "./Routes/adopts.routes.js";
import "dotenv/config";
import "./DataBase/conectDb.js";

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users/v1", usersRouter);
app.use("/api/adopts/v1", adoptsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
