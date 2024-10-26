import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Statistic } from "antd";
import { Bar } from '@ant-design/charts/es/bar'; // Adjusted import path


const UserAnalysis = ({ userId }) => {
  const [data, setData] = useState({ appointments: [], totalAppointments: 0 });

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`/api/v1/user/analysis/${userId}`, {
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
    fetchUserData();
  }, [userId]);

  const chartData = data.appointments.map((appointment) => ({
    date: appointment.date,
    count: appointment.count,
  }));

  const config = {
    data: chartData,
    xField: "date",
    yField: "count",
    seriesField: "type",
  };

  return (
    <div>
      <Card title="User's Appointment Analysis">
        <Statistic title="Total Appointments" value={data.totalAppointments} />
        <Bar {...config} />
      </Card>
    </div>
  );
};

export default UserAnalysis;
