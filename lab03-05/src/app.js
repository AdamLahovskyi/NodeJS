const express = require("express");
require("dotenv").config();
require("../models/bd_connect");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
