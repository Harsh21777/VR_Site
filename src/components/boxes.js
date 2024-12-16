

import React, { useEffect, useState } from "react";
import gearVR from "../images/Rectangle 4.png";
import smartVR from "../images/Rectangle 5.png";
import playStationVR from "../images/Rectangle 6.png";

const Box = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 480px)").matches);
      setIsTablet(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  const responsiveStyles = {
    ...styles,
    imageContainer: {
      ...styles.imageContainer,
      flexDirection: isMobile || isTablet ? "column" : "row",
      justifyContent: isMobile ? "center" : "space-between",
    },
    imageCard: {
      ...styles.imageCard,
      transform: isMobile ? "scale(1)" : isTablet ? "scale(1.2)" : "scale(1.5)",
      marginBottom: isMobile || isTablet ? "20px" : "0",
    },
    image: {
      ...styles.image,
      width: isMobile ? "80%" : "100%",
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#0B0319",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={responsiveStyles.imageContainer}>
        {/* Gear VR Headset */}
        <div style={responsiveStyles.imageCard}>
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            style={responsiveStyles.link}
          >
            <img
              src={gearVR}
              alt="Gear VR Headset"
              style={responsiveStyles.image}
            />
          </a>
          <h2>Gear VR Headset</h2>
        </div>

        {/* Smart VR Headset */}
        <div style={responsiveStyles.imageCard}>
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            style={responsiveStyles.link}
          >
            <img
              src={smartVR}
              alt="Smart VR Headset"
              style={responsiveStyles.image}
            />
          </a>
          <h2>Smart VR Headset</h2>
        </div>

        {/* PlayStation VR */}
        <div style={responsiveStyles.imageCard}>
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            style={responsiveStyles.link}
          >
            <img
              src={playStationVR}
              alt="Play Station VR"
              style={responsiveStyles.image}
            />
          </a>
          <h2>Play Station VR</h2>
        </div>
      </div>
    </div>
  );
};

const styles = {
  imageContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    flexWrap: "wrap",
    margin: "0 20px",
    transform: "scale(0.95)",
  },
  imageCard: {
    // transform: "scale(1.5)",
    transition: "transform 0.3s ease-in-out",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
};

export default Box;

