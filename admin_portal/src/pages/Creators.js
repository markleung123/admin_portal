import React from "react";
import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "antd";
import { BasicTable } from "../components/Table";

export const Creators = () => {
  const [creators, setCreator] = useState([]);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const result = await axios(
  //       "http://localhost:8091/poparedadmin/admin/getAllBrands"
  //     );
  //     setData(result.data);
  //   })();
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8091/poparedadmin/admin//getAllCreator")
      .then((response) => {
        setCreator(response.data.data);
        console.log(response.data);
      })
      .then(() => {
        const data = creators.map(({ id, name, email, phone }) => ({
          id: id,
          name: name,
          email: email,
          phone: phone,
        }));
        setData(data);
        console.log(data);
      });
  }, [creators.length]);

  const columns = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
  ];

  return <BasicTable columns={columns} data={data} raw={creators} />;
};
