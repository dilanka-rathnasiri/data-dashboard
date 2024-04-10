import { Row } from "@/app/models/row";
import { compareText } from "@/app/utils/text";

export default function filterData(data, filter) {
  const headers = Object.keys(data[0]);
  const values = data.map((item) => {
    const { n, id, name, address, birthDate, email } = item;
    return new Row(n, id, name, address, birthDate, email);
  });
  let rows = [];

  for (let i = 0; i < values.length; i++) {
    if (
      compareText(values[i].id, filter.id) &&
      compareText(values[i].name, filter.name) &&
      compareText(values[i].address, filter.address) &&
      compareText(values[i].birthdate, filter.birthdate) &&
      compareText(values[i].email, filter.email)
    ) {
      rows.push(Object.values(values[i]));
    }
  }

  return {
    headers: headers,
    rows: rows,
  };
}
