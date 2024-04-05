const express = require("express");
const router = express.Router();
const {
  homeDataController,
  data1Controller,
  data2Controller,
  data3Controller,
  data4Controller,
} = require("../controllers/data-controller");

router.get("/home", homeDataController);

router.get("/1", data1Controller);

router.get("/2", data2Controller);

router.get("/3", data3Controller);

router.get("/4", data4Controller);

module.exports = router;
