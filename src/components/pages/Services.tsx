import React from "react";

const Services: React.FC = () => {
  const services = [
    { id: 1, title: "Private Breathwork Sessions", description: "One-on-one tailored breathwork guidance." },
    { id: 2, title: "Group Workshops", description: "Collaborative breathwork experiences for groups." },
    { id: 3, title: "Spiritual Coaching", description: "Explore and integrate breathwork into your spiritual journey." },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id} style={{ marginBottom: "10px" }}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;