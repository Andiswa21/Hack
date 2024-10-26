import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Statistic } from "antd"; // Importing Ant Design components
import { Line } from '@ant-design/charts/es/line'; // Adjusted import path

const DoctorAnalysis = ({ doctorId }) => {
  const [data, setData] = useState({ appointments: [], revenue: 0 });

  const fetchDoctorData = async () => {
    try {
      const res = await axios.get(`/api/v1/doctor/analysis/${doctorId}`, {
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
    fetchDoctorData();
  }, [doctorId]);

  // Prepare data for the chart
  const chartData = data.appointments.map((appointment) => ({
    date: appointment.date,
    revenue: appointment.revenue,
  }));

  const config = {
    data: chartData,
    xField: "date",
    yField: "revenue",
    point: {
      size: 5,
      shape: "diamond",
    },
  };

  return (
    <div>
      <Card title="Doctor's Revenue Analysis">
        <Statistic title="Total Revenue" value={data.revenue} prefix="$" />
        <Line {...config} />
      </Card>
    </div>
  );
};

export default DoctorAnalysis;
