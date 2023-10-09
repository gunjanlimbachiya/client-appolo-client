import React from "react";
import { useCustomQuery } from "../appolo_client/customServices";
import { GET_USERS } from "../appolo_client/queries/queries";
import {  TableColumn } from "../types/types";
import TableComponent from "./layout/TableComponent";

const Users = () => {
  const { error, data, loading } = useCustomQuery(GET_USERS);

  const users: Record<string, React.ReactNode>[] = data?.users;

  const columns: TableColumn<Record<string, React.ReactNode>>[] = [
    { header: "UUID", accessor: "uuid" },
    { header: "Name", accessor: "first_name" },
    { header: "Email", accessor: "primary_email" },
    { header: "Username", accessor: "username" },
    { header: "Status", accessor: "status" },
  ];

  if (error) <p>{error.message}</p>;
  if (loading) <div>Loading</div>;

  return (
    <>
    <h1>Users</h1>
    <p>Users are people who can access our internal systems to perform their daily activities.</p>
    <div>{users && <TableComponent columns={columns} data={users} operation={true} />}</div>
    </>
  );
};

export default Users;
