const express = require("express");
const app = express();
const path = require("node:path");

// Router Imports
const { indexRouter } = require("./routes/indexRouter.js");
const groomingRequestRouter = require("./routes/groomingRequestRouter.js");

// Static Asset Configuration
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
// SSR View / View Ingine  Configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Server Port
const PORT = 3000;

// Parse Form Input Values and Return Variables With Names
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/grooming-requests", groomingRequestRouter);

app.use((req, res, next) => {
  res.status(404).render("errorPage");
});

app.use((err, req, res, next) => {
  res.status(404).render("errorPage");
});

app.listen(PORT, () => {
  (err) => {
    if (err) {
      console.error("Server failed to start:", err);
    } else {
      console.log(`Server running on port ${PORT}`);
    }
  };
});
