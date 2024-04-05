const homeDataController = (req, res) => {
  res.send("Home data");
};

const data1Controller = (req, res) => {
  res.send("Data 1");
};

const data2Controller = (req, res) => {
  res.send("Data 2");
};

const data3Controller = (req, res) => {
  res.send("Data 3");
};

const data4Controller = (req, res) => {
  res.send("Data 4");
};

module.exports = {
  homeDataController,
  data1Controller,
  data2Controller,
  data3Controller,
  data4Controller,
};
