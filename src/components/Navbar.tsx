import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Breath With Seb</h1>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>About</Link></li>
        <li><Link to="/services" style={styles.link}>Services</Link></li>
        <li><Link to="/book-appointments" style={styles.link}>Book Appointments</Link></li>
        <li><Link to="/spiritual-toolbox" style={styles.link}>Spiritual Toolbox</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1em",
  },
};

export default Navbar;