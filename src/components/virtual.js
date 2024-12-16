import React, { useEffect } from "react";
import Frame4 from "../images/Group 7.png";
import PlayIcon from "../images/play.png"; 

const VirtualReality = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#0B0319";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.color = "#fff";
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>
          <span style={styles.touch}>Touch the {"  "}</span>
          <span style={styles.reality}>Reality</span> . . .
        </h1>
        <p style={styles.description}>
          The Future of Virtual Reality: Where Pixels Dream.
          <br />
          In the not-so-distant future, pixels will transcend screens. They’ll
          escape their two-dimensional confines and leap into our reality,
          dancing with our senses.
        </p>
        <div style={styles.buttonContainer}>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <button style={styles.playButton}>Play Now</button>
          </a>
          <img src={PlayIcon} alt="Play Icon" style={styles.playIcon} />
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img src={Frame4} alt="VR Experience" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    minHeight: "100vh",
    width: "100%",
    padding: "40px",
    gap: "60px",
    transform: "scale(1)",
    boxSizing: "border-box",
  },
  content: {
    flex: "1 1 45%",
    maxWidth: "600px",
    textAlign: "left",
  },
  heading: {
    fontSize: "3.5rem",
    lineHeight: "1.2",
    marginBottom: "20px",
  },
  touch: {
    background: "linear-gradient(90deg, #0CFADF ,rgb(29, 71, 107) )",
    transform:"scaleY(2)",
    WebkitBackgroundClip: "text", 
    WebkitTextFillColor: "transparent",
  },
  
  description: {
    fontSize: "1.5rem",
    margin: "20px 0",
    lineHeight: "1.6",
    color: "#ccc",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px", 
  },
  playButton: {
    background: "linear-gradient(90deg, #00d9ff, #ff00d9)",
    color: "#fff",
    padding: "15px 40px",
    border: "none",
    borderRadius: "50px",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  link: {
    textDecoration: "none",
  },
  playIcon: {
    width: "40px",
    height: "40px",
    marginLeft:"20px",
    cursor: "pointer",
  },
  imageContainer: {
    flex: "1 1 45%",
    maxWidth: "600px",
  },
  image: {
    width: "100%",
    borderRadius: "20px",
  },
};

export default VirtualReality;

