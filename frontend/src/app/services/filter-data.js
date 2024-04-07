import { Row } from "@/app/models/row";

export default function filterData(data, filter) {
  const headers = Object.keys(data[0]);
  const values = data.map((item) => {
    const { n, id, name, address, birthDate, email } = item;
    return new Row(n, id, name, address, birthDate, email);
  });
  let rows = [];

  for (let i = 0; i < values.length; i++) {
    if (
      values[i].id.startsWith(filter.id) &&
      values[i].name.startsWith(filter.name) &&
      values[i].address.startsWith(filter.address) &&
      values[i].birthdate.startsWith(filter.birthdate) &&
      values[i].email.startsWith(filter.email)
    ) {
      rows.push(Object.values(values[i]));
    }
  }

  return {
    headers: headers,
    rows: rows,
  };
}
