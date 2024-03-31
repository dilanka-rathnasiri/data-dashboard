import { getData } from "@/app/resources/data-1";

export default function getTableData(data, filter) {
  const headers = Object.keys(data[0]);
  let rows = [];

  for (let i = 0; i < data.length; i++) {
    if (
      data[i].id.startsWith(filter.id) &&
      data[i].name.startsWith(filter.name) &&
      data[i].address.startsWith(filter.address) &&
      data[i].birthdate.startsWith(filter.birthdate) &&
      data[i].email.startsWith(filter.email)
    ) {
      rows.push(Object.values(data[i]));
    }
  }

  return {
    headers: headers,
    rows: rows,
  };
}
