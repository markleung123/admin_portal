import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "antd";
import { BasicTable } from "../components/Table";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Styles = styled.div`
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const Brands = () => {
  const [brands, setBrands] = useState([]);
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
      .get("http://localhost:8091/poparedadmin/admin/getAllBrands")
      .then((response) => {
        setBrands(response.data.data);
        console.log(brands);
      })
      .then(() => {
        const info = brands.map(
          ({
            id,
            name,
            lastname,
            country,
            email,
            phone,
            legal,
            rdate,
            isActive,
            isBlackListed,
            isPremium,
            premiumStart,
            premiumEnd,
          }) => ({
            id: id,
            name: name,
            lastname: lastname,
            country: country,
            email: email,
            legal: legal,
            phone: phone,
            isActive: isActive,
            isBlackListed: isBlackListed,
            rdate: rdate,
            premium: isPremium,
            premiumStart: premiumStart,
            premiumEnd: premiumEnd,
          })
        );

        const data = brands.map(
          ({ id, name, email, legal, isPremium, phone, rdate }) => ({
            id: id,
            name: name,
            email: email,
            legal: legal,
            premium: isPremium,
            phone: phone,
            rdate: rdate,
          })
        );
        console.log(data);
        setInfo(info);
        setData(data);
        console.log(info);
        console.log(data);
      });
  }, [brands.length]);

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
      Header: "Company name",
      accessor: "legal",
    },
    {
      Header: "Premium",
      accessor: "premium",
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

  return (
    // <Styles>
    <BasicTable columns={columns} data={data} raw={info} />
    // </Styles>
  );
};
