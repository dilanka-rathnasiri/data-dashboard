import { getData } from "@/app/resources/data-1";

export default function getTableData(data, filter) {
  const headers = Object.keys(data[0]);
  let rows = [];

  for (let i = 0; i < data.length; i++) {
    if (
      (filter.id === "" || data[i].id === filter.id) &&
      (filter.name === "" || data[i].name === filter.name) &&
      (filter.address === "" || data[i].address === filter.address) &&
      (filter.birthdate === "" || data[i].birthdate === filter.birthdate) &&
      (filter.email === "" || data[i].email === filter.email)
    ) {
      rows.push(Object.values(data[i]));
    }
  }

  return {
    headers: headers,
    rows: rows,
  };
}
