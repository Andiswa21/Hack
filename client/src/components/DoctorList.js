import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();

  // Check if the doctor object is defined
  if (!doctor) {
    return null; // Render nothing if doctor is not provided
  }

  return (
    <div
      className="card m-2"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      aria-label={`Book appointment with ${doctor.firstName} ${doctor.lastName}`}
    >
      <div className="card-header">
        {doctor.firstName} {doctor.lastName}
      </div>
      <div className="card-body">
        <p>
          <b>Specialization</b>: {doctor.specialization || "Not specified"}
        </p>
        <p>
          <b>Experience</b>: {doctor.experience || "N/A"} years
        </p>
        <p>
          <b>Fees Per Consultation</b>: {doctor.feesPerConsultation || "N/A"}
        </p>
        <p>
          <b>Timings</b>: {doctor.timings && doctor.timings.length === 2 ? `${doctor.timings[0]} - ${doctor.timings[1]}` : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default DoctorList;
