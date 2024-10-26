import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import DoctorList from "../components/DoctorList";
import LineChart from "../components/chart";
import Slider from "react-slick";
import SpeechToText from "../components/SpeechToText"; // Import the SpeechToText component
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);

  // Fetch user data
  const getUserData = async () => {
    try {
      const res = await axios.get("/api/v1/user/getAllDoctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout>
      <h1 className="text-center">Dashboard</h1>
      <div className="p-2 d-flex" style={{ height: "40vh" }}>
        <LineChart />
        <SpeechToText /> {/* Add SpeechToText component */}
      </div>

<br></br>
      <div className="slider-container">
        <h1 className="text-center border">List of care takers
          </h1> 

      {doctors.length > 0 ? (
        <Slider {...sliderSettings}>
          {/* Display doctors in groups of 3 using slices */}
          {Array.from({ length: Math.ceil(doctors.length / 3) }).map((_, index) => (
            <div key={index} className="doctor-slide">
              {doctors.slice(index * 3, index * 3 + 3).map((doctor) => (
                <div key={doctor._id} className="doctor-item">
                  <DoctorList doctor={doctor} />
                </div>
              ))}
            </div>
          ))}
        </Slider>
      ) : (
        <p>No doctors available</p> // Optional: Message when no doctors are available
      )}
    </div>
    </Layout>
  );
};

export default HomePage;
