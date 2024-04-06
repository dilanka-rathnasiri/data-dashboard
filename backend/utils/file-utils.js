const fsp = require("fs/promises");

const loadData = async (fileName) => {
  const tableData = await fsp.readFile(`resources/${fileName}.json`, "utf8");
  return JSON.parse(tableData);
};

module.exports = loadData;
