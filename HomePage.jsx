import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <div style={styles.topNav}>
        <span style={styles.navItem}>About Us</span>
        <span style={styles.navItem}>Resources</span>
        <span style={styles.navItem}>Contact Us</span>
      </div>

      {/* Title Section */}
      <div style={styles.headerSection}>
        <h1 style={styles.title}>Discover Your Tech Path</h1>
      </div>

      {/* Content Section */}
      <div style={styles.contentSection}>
        {/* Left Column: Paragraph and Bullets */}
        <div style={styles.leftColumn}>
          <p style={styles.paragraph}>
            Welcome to the Career Quiz Platform! Finding your place in tech can
            feel overwhelming, but it doesn’t have to be. This platform is
            designed to help you explore your interests, match them to tech
            careers, and give you actionable next steps to get started.
          </p>
          <div style={styles.bulletSection}>
            <div style={styles.bullet}>
              A personalized quiz that aligns your passions with potential tech
              careers.
            </div>
            <div style={styles.bullet}>
              Insights into how your learning style influences your career path.
            </div>
            <div style={styles.bullet}>
              A roadmap of tech skills and projects tailored to your goals.
            </div>
            <div style={styles.bullet}>
              Resources to help you grow, from career tips to project ideas.
            </div>
          </div>
        </div>

        {/* Right Column: Button */}
        <div style={styles.rightColumn}>
          <Link to="/quiz">
            <button style={styles.button}>Start Quiz</button>
          </Link>
        </div>
      </div>

      {/* Decorative Circle */}
      <div style={styles.circle}></div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Sharp Grotesk', sans-serif",
    background: "linear-gradient(to bottom, #FFBACB, #FF6E84)",
    color: "#fff",
    minHeight: "100vh",
    overflow: "hidden",
    position: "relative",
    padding: "20px",
  },
  topNav: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 0",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
  },
  navItem: {
    margin: "0 10px",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  },
  headerSection: {
    textAlign: "center",
    margin: "20px 0",
  },
  title: {
    fontSize: "2.5rem",
    color: "#FFFFFF",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  contentSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "20px",
  },
  leftColumn: {
    width: "60%",
  },
  paragraph: {
    textAlign: "left",
    lineHeight: "1.8",
    fontSize: "1.1rem",
    marginBottom: "20px",
  },
  bulletSection: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  bullet: {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "10px",
    textAlign: "left",
    fontSize: "1rem",
  },
  rightColumn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    border: "none",
    padding: "15px 25px",
    borderRadius: "20px",
    color: "#fff",
    fontSize: "1.2rem",
    cursor: "pointer",
    textAlign: "center",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  circle: {
    position: "absolute",
    top: "20px",
    left: "20px",
    width: "40px",
    height: "40px",
    background: "#fff",
    borderRadius: "50%",
  },
};

export default HomePage;
