require("dotenv").config();
const express = require("express");
const projectRoutes = require("./routes/projectRoutes");
const app = express();

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// route
app.use("/api/projects", projectRoutes);

// port
const PORT = process.env.PORT || 8000;

// listening
app.listen(PORT, () => {
  console.log(`litening port ${PORT}`);
});
