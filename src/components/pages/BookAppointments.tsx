import React, { useState } from "react";

const BookAppointments: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", date: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Appointment booked successfully for ${formData.date}.`);
    setFormData({ name: "", email: "", date: "" }); // Clear form
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book Appointments</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px" }}
          />
        </div>
        <button type="submit" style={{ marginTop: "10px", padding: "5px 15px" }}>
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointments;