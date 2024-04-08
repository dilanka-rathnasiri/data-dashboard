"use client";
import { useDeferredValue, useEffect, useState } from "react";
import filterData from "@/app/services/filter-data";
import getData from "@/app/services/get-data";
import Filters from "@/app/components/filters";
import LoadingSpinner from "@/app/components/loading-spinner";

export function DataView({ path }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");

  const [tableData, setTableData] = useState({});
  const [headers, setHeaders] = useState({});
  const [rows, setRows] = useState({});
  const [dataLoading, setDataLoading] = useState(true);
  const [filteredDataLoading, setFilteredDataLoading] = useState(true);

  const filterValues = {
    id: id,
    name: name,
    address: address,
    birthdate: birthdate,
    email: email,
  };
  const deferredFilterValues = useDeferredValue(filterValues);
  const filterSetters = {
    setId: setId,
    setName: setName,
    setAddress: setAddress,
    setBirthdate: setBirthdate,
    setEmail: setEmail,
  };

  useEffect(() => {
    getData(path)
      .then((data) => {
        setTableData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, [path]);

  useEffect(() => {
    if (!dataLoading) {
      const filteredData = filterData(tableData, deferredFilterValues);
      setHeaders(filteredData.headers);
      setRows(filteredData.rows);
      setFilteredDataLoading(false);
    }
  }, [tableData, deferredFilterValues, dataLoading]);

  if (filteredDataLoading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div>
        <Filters
          filterValues={filterValues}
          filterSetters={filterSetters}
          headers={headers}
          rows={rows}
        />
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
}
