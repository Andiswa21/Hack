import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <>
      <div className="register-container">
    <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
            <h3 className="text-center">Register Form</h3>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please input your name!" }]}>
                <Input type="text" required />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Please input a valid email!" }]}>
                <Input type="email" required />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
                <Input type="password" required />
            </Form.Item>
            <Link to="/login" className="m-2">
                Already a user? Login here
            </Link>
            <button className="btn btn-primary" type="submit">
                Register
            </button>
        </Form>
    </div>
    <div className="image-container">
        <img src="log.jpg" alt="Description" />
    </div>
</div>

    </>
  );
};

export default Register;
