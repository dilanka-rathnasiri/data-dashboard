const loadData = require("../utils/file-utils");

const homeDataController = (req, res) => {
  loadData("data-home")
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

const data1Controller = (req, res) => {
  loadData("data-1")
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

const data2Controller = (req, res) => {
  loadData("data-2")
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

const data3Controller = (req, res) => {
  loadData("data-3")
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

const data4Controller = (req, res) => {
  loadData("data-4")
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

module.exports = {
  homeDataController,
  data1Controller,
  data2Controller,
  data3Controller,
  data4Controller,
};
