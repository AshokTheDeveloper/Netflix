const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

const initializeDBAndServer = async (PORT, app) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Failed to connect to MongoDB:", error.message);
  }
  app.listen(PORT, () => {
    console.log(`Server started and listens on http://localhost:${PORT}`);
  });
};

module.exports = initializeDBAndServer;
