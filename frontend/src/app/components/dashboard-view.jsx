"use client";
import { useEffect, useState } from "react";
import Table from "@/app/components/table";
import LoadingSpinner from "@/app/components/loading-spinner";
import filterData from "@/app/services/filter-data";
import Filters from "@/app/components/filters";

export default function DashboardView({ tableData }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");

  const [headers, setHeaders] = useState({});
  const [rows, setRows] = useState({});

  useEffect(() => {
    if (tableData.length > 0) {
      const filters = {
        id: id,
        name: name,
        address: address,
        birthdate: birthdate,
        email: email,
      };

      const filteredData = filterData(tableData, filters);
      setHeaders(filteredData.headers);
      setRows(filteredData.rows);
    }
  }, [tableData, id, name, address, birthdate, email]);

  if (rows.length > 0) {
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

    return (
      <div>
        <Filters
          filterValues={filterValues}
          filterSetters={filterSetters}
          rows={rows}
          headers={headers}
        />
        <Table headers={headers} rows={rows} />
      </div>
    );
  } else {
    return <LoadingSpinner />;
  }
}
