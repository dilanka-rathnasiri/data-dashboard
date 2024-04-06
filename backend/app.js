const express = require("express");
const app = express();
const port = 5000;
const dataRoutes = require("./routes/data-routes");

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.use("/data", dataRoutes);
