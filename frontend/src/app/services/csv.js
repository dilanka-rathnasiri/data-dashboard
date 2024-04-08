import { saveAs } from "file-saver";

export function createCSV(headers, tableData) {
  const headerString = headers.join(",");
  tableData.map((row) => row.join(","));
  const tableDataString = tableData.join("\n");
  return headerString + "\n" + tableDataString;
}

export function downloadCSV(csvContent, filename) {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
  saveAs(blob, filename || "data.csv");
}
