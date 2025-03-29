import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Breath With Seb. All Rights Reserved.</p>
      <div style={styles.socialLinks}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Facebook
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Instagram
        </a>
        {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Twitter
        </a> */}
      </div>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "0.9em",
  },
};

export default Footer;