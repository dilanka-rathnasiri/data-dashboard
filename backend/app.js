const express = require("express");
const port = 5000;
const dataRoutes = require("./routes/data-routes");
const cors = require("cors");
const app = express();

app.use(cors());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.use("/data", dataRoutes);
