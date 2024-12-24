const authenticateUser = (req, res) => {
  try {
    const jwtToken = req.headers.authorization.split(" ")[1];
    console.log(jwtToken);
    if (!jwtToken) {
      res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
  } catch (error) {
    console.log("Internal server error on middleware: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = authenticateUser;
