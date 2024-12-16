import React, { useEffect } from "react";
import Group from "../images/Group 5.png";
import PlayIcon from "../images/play.png";

const Metaverse = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#0B0319";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.color = "#fff";
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={Group} alt="VR Experience" style={styles.image} />
      </div>
      <div style={styles.content}>
        <h1 style={styles.heading}>
          <span style={styles.explore}>Explore in the metaverse</span> <br />
          one <span style={styles.pixel}>pixel</span> at a time . . .
        </h1>
        <p style={styles.description}>
          The Future of Virtual Reality: Where Pixels Dream.
          <br />
          In the not-so-distant future, pixels will transcend screens. They’ll
          escape their two-dimensional confines and leap into our reality,
          dancing with our senses.
        </p>
        <div style={styles.buttonContainer}>
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <button style={styles.playButton}>Play Now</button>
          </a>
          <img src={PlayIcon} alt="Play Icon" style={styles.playIcon} />
        </div>
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
    transform: "scale(110%)",
    boxSizing: "border-box",
  },
  imageContainer: {
    flex: "1 1 45%",
    maxWidth: "600px",
  },
  image: {
    width: "100%",
    borderRadius: "20px",
  },
  content: {
    flex: "1 1 45%",
    maxWidth: "700px",
    textAlign: "left",
  },
  heading: {
    fontSize: "3.5rem",
    lineHeight: "1.2",
    marginBottom: "20px",
  },
  explore: {
    
    background: "linear-gradient(90deg, #0CFADF ,#DF00BC )",
    transform:"scaleY(2)",
    WebkitBackgroundClip: "text", 
    WebkitTextFillColor: "transparent",
  },
  
 
  description: {
    fontSize: "1.5rem",
    margin: "20px 0",
    lineHeight: "2",
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
  playIcon: {
    width: "40px", 
    height: "40px",
    marginLeft:"20px",
    cursor: "pointer",
  },
};

export default Metaverse;



