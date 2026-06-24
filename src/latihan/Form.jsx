import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [goals, setGoals] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        { email, password }
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.refreshToken);
      alert("Login berhasil! Token tersimpan.");
    } catch (error) {
      console.error(error);
      alert("Login gagal: " + (error.response?.data?.msg || error.message));
    }
  };

  const fetchGoals = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://jwt-auth-eight-neon.vercel.app/goals",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setGoals(response.data.data[0] || {});
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          Email :
          <input
            type="text"
            id="email"
            name="email"
            className="border ml-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          Password :
          <input
            type="password"
            id="password"
            name="password"
            className="border ml-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="send" className="bg-gray-200 p-2 cursor-pointer" />
      </form>
      <hr className="py-4" />
      Present amount : {goals.present_amount}
      <br />
      Target Amount : {goals.target_amount}
    </div>
  );
};

export default Form;