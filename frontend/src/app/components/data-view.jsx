import getTableData from "@/app/services/data-services";

export function DataView({ data }) {
  const { headers, rows } = getTableData(data);

  return (
    <div>
      <table className="table table-bordered border-secondary">
        <thead>
          <tr className="table-success">
            {headers.map((i) => (
              <th scope="col" key={i}>
                {i}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
