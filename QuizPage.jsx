import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // Collects user answers
  const [navPanelVisible, setNavPanelVisible] = useState(false); // State for navigation panel
  const navigate = useNavigate();

  // Beginning of quiz questions
  const questions = [
    {
      title: "Personality Traits",
      question: "What is your preferred learning style?",
      options: ["Visual", "Auditory", "Kinesthetic", "Reading/Writing"],
    },
    {
      title: "Personality Traits",
      question: "What is your preferred working style?",
      options: ["Independently", "In a Team", "Collaborating", "Leading"],
    },
    {
      title: "Problem Solving",
      question: "How do you approach problem-solving?",
      options: ["Logical and structured", "Creative and abstract"],
    },
    {
      title: "Time Management",
      question: "How often can you dedicate time to learning new skills?",
      options: ["Daily", "Weekly", "Monthly", "Occasionally"],
    },
    {
      title: "Interests and Passions",
      question: "What types of projects excite you most?",
      options: [
        "Building applications",
        "Analyzing data",
        "Creating designs",
        "Developing hardware",
      ],
    },
    {
      title: "Interests and Passions",
      question: "Which of these areas do you enjoy most?",
      options: [
        "Software Development",
        "Cybersecurity",
        "Data Science",
        "UX/UI Design",
      ],
    },
    {
      title: "Skills and Aptitudes",
      question: "How would you describe your technical skills?",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      title: "Skills and Aptitudes",
      question: "What is your strongest skill?",
      options: [
        "Critical thinking",
        "Creativity",
        "Technical expertise",
        "Collaboration",
      ],
    },
    {
      title: "Learning Style",
      question: "How do you prefer to learn new skills?",
      options: [
        "Watching video tutorials",
        "Practicing hands-on",
        "Listening to lectures",
        "Reading guides",
      ],
    },
    {
      title: "Learning Style",
      question: "Do you enjoy self-paced learning?",
      options: ["Yes, I thrive on it", "No, I prefer guided instruction"],
    },
    {
      title: "Work Environment",
      question: "What type of work environment do you prefer?",
      options: ["Fast-paced", "Structured", "Flexible", "Independent"],
    },
    {
      title: "Interests and Passions",
      question: "Which hobby aligns with your interests?",
      options: [
        "Gaming",
        "Graphic design",
        "Electronics tinkering",
        "Writing code challenges",
      ],
    },
    {
      title: "Career Goals",
      question: "What is most important in your career?",
      options: [
        "Job stability",
        "Creative freedom",
        "High salary",
        "Growth opportunities",
      ],
    },
    {
      title: "Team Dynamics",
      question: "How do you contribute in a team?",
      options: [
        "Providing leadership",
        "Offering technical expertise",
        "Supporting with creative input",
        "Ensuring collaboration and harmony",
      ],
    },
    {
      title: "Tech Areas",
      question: "Which type of technology excites you the most?",
      options: [
        "Artificial Intelligence",
        "Web Development",
        "Blockchain",
        "Cloud Computing",
      ],
    },
  ];

  // End of questions
  const handleNext = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    // Navigate to ResultsPage with answers as state
    navigate("/results", { state: { answers } });
  };

  const toggleNavPanel = () => {
    setNavPanelVisible(!navPanelVisible);
  };

  const handleReturnHome = () => {
    navigate("/"); // Adjust the route as per your homepage
  };

  return (
    <div style={styles.container}>
      {/* Left Side Title and Paragraph */}
      <div style={styles.leftPanel}>
        <h2 style={styles.title}>Tech Career Quiz</h2>
        <p style={styles.description}>
          Welcome to the Tech Career Quiz! Through a series of carefully crafted
          questions, we analyze your skills, passions, and learning preferences
          across key categories like personality, problem-solving, and
          interests. By the end, you’ll uncover the tech career path that aligns
          perfectly with who you are. Let’s get started on this journey of
          self-discovery and exploration!
        </p>
        <button style={styles.homeButton} onClick={handleReturnHome}>
          Return to Homepage
        </button>
      </div>

      {/* Navigation Panel */}
      <div
        style={{
          ...styles.navPanel,
          transform: navPanelVisible ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <p
          style={styles.navPanelContent}
          onClick={() => alert("Resources coming soon!")}
        >
          Explore Resources
        </p>
        <p
          style={styles.navPanelContent}
          onClick={() =>
            alert(
              `You have answered ${answers.length} of ${questions.length} questions`,
            )
          }
        >
          Review Progress
        </p>
        <p
          style={styles.navPanelContent}
          onClick={() => alert("Support contact: support@example.com")}
        >
          Contact Support
        </p>
        <p style={styles.navPanelContent} onClick={handleReturnHome}>
          Return Home
        </p>
      </div>

      {/* Navigation Button */}
      <div style={styles.navButton} onClick={toggleNavPanel}>
        <span style={styles.magnifyingGlass}></span>
      </div>

      {/* Quiz Bubble */}
      <div style={styles.quizBubble}>
        <h1>{questions[currentQuestion].title}</h1>
        <p style={styles.question}>{questions[currentQuestion].question}</p>

        {/* Multiple Choice Options */}
        <div style={styles.optionsContainer}>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              style={styles.optionButton}
              onClick={() => handleNext(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div style={styles.arrowContainer}>
          {currentQuestion > 0 && (
            <button style={styles.arrow} onClick={handlePrevious}>
              Previous
            </button>
          )}
          {currentQuestion < questions.length - 1 ? (
            <button style={styles.arrow} onClick={() => handleNext(null)}>
              Next
            </button>
          ) : (
            <button style={styles.submitButton} onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Sharp Grotesk', sans-serif",
    background: "linear-gradient(to bottom, #FFBACB, #FF6E84)",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  leftPanel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Aligns content to the left
    marginLeft: "50px", // Adds space from the left edge of the screen
  },
  title: {
    fontSize: "1rem",
    marginBottom: "10px",
  },
  description: {
    maxWidth: "300px", // Restricts the width of the paragraph
    textAlign: "left", // Aligns the text to the left
    margin: "20px", // Adds space around the text
    lineHeight: "1.5", // Ensures proper spacing between lines
    fontSize: "0.9rem", // Makes the font slightly smaller for compactness
    color: "#fff", // Keeps the color neutral and readable
  },
  homeButton: {
    background: "#D5006D",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "0.8rem",
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },

  navPanel: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "200px",
    height: "100%",
    background: "rgba(255, 105, 180, 0.9)",
    padding: "20px",
    transition: "transform 0.3s ease",
  },
  navPanelContent: {
    fontSize: "1rem",
    marginBottom: "20px",
    cursor: "pointer",
    color: "#fff",
    textDecoration: "none",
  },
  navButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#FF6E 84",
    border: "none",
    padding: "10px",
    borderRadius: "50%",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    zIndex: 1100,
  },
  quizBubble: {
    width: "60%",
    maxWidth: "400px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    position: "relative",
  },
  question: {
    fontSize: "1rem",
    marginBottom: "15px",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  optionButton: {
    background: "rgba(255, 255, 255, 0.3)",
    border: "none",
    padding: "10px 15px",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "0.9rem",
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s, box-shadow 0.2s",
    textAlign: "center",
  },
  arrowContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
  },
  const styles: {
    navBar: {
      display: "flex",
      alignItems: "center", // Centers content vertically
      height: "100vh", // Makes the nav bar span the full height of the viewport
      backgroundColor: "#f4f4f4", // Background color for visibility
      padding: "0 20px",
    },
    navList: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
    },
    navItem: {
      margin: "15px 0", // Adds spacing between navigation items
      fontSize: "1rem",
      color: "#333",
    },
  };
  
  arrow: {
    background: "#D5006D",
    border: "none",
    padding: "8px 15px",
    borderRadius: "15px",
    color: "#fff",
    fontSize: "0.9rem",
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    margin: "0 10px",
  },
  submitButton: {
    background: "#D5006D",
    border: "none",
    padding: "8px 15px",
    borderRadius: "15px",
    color: "#fff",
    fontSize: "0.9rem",
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default QuizPage;
