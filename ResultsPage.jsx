import React from "react";
import { useLocation } from "react-router-dom";

const ResultsPage = () => {
  const location = useLocation();
  const { answers } = location.state || {};

  return (
    <div style={styles.container}>
      <h1>Your Results</h1>
      {answers ? (
        answers.map((answer, index) => (
          <div key={index}>
            <p>
              <strong>Question {index + 1}:</strong> {answer}
            </p>
          </div>
        ))
      ) : (
        <p>No answers available.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    /* Styles for ResultsPage */
  },
};

export default ResultsPage;
