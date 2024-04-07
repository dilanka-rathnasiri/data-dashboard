"use client";
import Filters from "@/app/components/filters";
import { useState } from "react";
import filterData from "@/app/services/filter-data";

export function DataView({ data }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const filterValues = {
    id: id,
    name: name,
    address: address,
    birthdate: birthdate,
    email: email,
  };
  const filterSetters = {
    setId: setId,
    setName: setName,
    setAddress: setAddress,
    setBirthdate: setBirthdate,
    setEmail: setEmail,
  };

  const { headers, rows } = filterData(data, filterValues);

  return (
    <div>
      <Filters filterValues={filterValues} filterSetters={filterSetters} />
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
