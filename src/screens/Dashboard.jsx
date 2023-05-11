import { Typography } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import Parents from "../components/Parents";

const Dashboard = () => {
  const { state } = useLocation();

  console.log("isinya state", state);

  return (
    <Parents>
      <Typography.Title>Ini halaman dashboard</Typography.Title>
    </Parents>
  );
};

export default Dashboard;
