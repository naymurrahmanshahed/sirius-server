require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
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

// mongodb
mongoose.set("strictQuery", false); //optional
mongoose
  .connect(process.env.MONGODB_KEY)
  .then(() => {
    // listening
    app.listen(PORT, () => {
      console.log(`connected to mongodb listening port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
