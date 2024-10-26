import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Statistic } from "antd";
import { Pie } from '@ant-design/charts/es/pie'; // Adjusted import path


const AdminAnalysis = () => {
  const [data, setData] = useState({ totalRevenue: 0, totalDoctors: 0, totalUsers: 0 });

  const fetchAdminData = async () => {
    try {
      const res = await axios.get("/api/v1/admin/analysis", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const chartData = [
    { type: "Total Revenue", value: data.totalRevenue },
    { type: "Total Doctors", value: data.totalDoctors },
    { type: "Total Users", value: data.totalUsers },
  ];

  const config = {
    data: chartData,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
  };

  return (
    <div>
      <Card title="Admin Overview">
        <Statistic title="Total Revenue" value={data.totalRevenue} prefix="$" />
        <Statistic title="Total Doctors" value={data.totalDoctors} />
        <Statistic title="Total Users" value={data.totalUsers} />
        <Pie {...config} />
      </Card>
    </div>
  );
};

export default AdminAnalysis;
