// Core modules
const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");

dotEnv.config();

// local module
const initializeDBAndServer = require("./utils/dbAndServerUtils");
const userRoutes = require("./routes/userRoutes");

// middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/netflix", userRoutes);

const PORT = process.env.PORT || 3002;
initializeDBAndServer(PORT, app);
