import React from "react";
import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "antd";
import { BasicTable } from "../components/Table";

export const Creators = () => {
  const [creators, setCreator] = useState([]);
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

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
        const info = creators.map(
          ({ id, name, email, phone, country, rdate }) => ({
            id: id,
            name: name,
            email: email,
            phone: phone,
            rdate: rdate,
            country: country,
          })
        );

        const data = creators.map(({ id, name, email, phone, rdate }) => ({
          id: id,
          name: name,
          email: email,
          phone: phone,
          rdate: rdate,
        }));
        setData(data);
        setInfo(info);
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
    {
      Header: "Register date",
      accessor: "rdate",
    },
  ];

  return <BasicTable columns={columns} data={data} raw={info} />;
};
