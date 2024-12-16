

import React, { useEffect, useState } from "react";
import smallImage from "../images/9f4e12f10cf49d0bfabfac4a4185b379 1.png";
import heroImage from "../images/image 1 1.png";

const App = () => {
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
    header: {
      ...styles.header,
      padding: isTablet ? "10px 20px" : "20px 50px",
    },
    nav: {
      ...styles.nav,
      flexDirection: isTablet ? "column" : "row",
      gap: isTablet ? "10px" : "20px",
    },
    smallImage: {
      ...styles.smallImage,
      transform: isTablet ? "scale(2)" : "scale(3.8)",
      margin: isTablet ? "10px 0" : "0",
    },
    heroSection: {
      ...styles.heroSection,
      flexDirection: isTablet ? "column" : "row",
      padding: isTablet ? "20px" : "50px",
      minHeight: isTablet ? "auto" : "calc(100vh - 70px)",
    },
    textSection: {
      ...styles.textSection,
      textAlign: isMobile ? "center" : "left",
    },
    nextGen: {
      ...styles.nextGen,
      fontSize: isMobile ? "60px" : "120px",
    },
    virtualText: {
      ...styles.virtualText,
      fontSize: isMobile ? "30px" : "60px",
    },
    realityText: {
      ...styles.realityText,
      fontSize: isMobile ? "30px" : "60px",
    },
    subText: {
      ...styles.subText,
      fontSize: isMobile ? "18px" : "30px",
    },
    button: {
      ...styles.button,
      padding: isMobile ? "10px 20px" : "20px 30px",
      fontSize: isMobile ? "16px" : "22px",
      borderRadius: isMobile ? "20px" : "50px",
    },
    heroImageContainer: {
      ...styles.heroImageContainer,
      position: isTablet ? "relative" : "absolute",
      top: isTablet ? "auto" : "150px",
      right: isTablet ? "auto" : "12%",
      width: isTablet ? "60%" : "40%",
      transform: isTablet ? "scale(1.2)" : "scale(1.7)",
    },
  };

  return (
    <div style={responsiveStyles.container}>
      {/* Header */}
      <div style={responsiveStyles.inner}>
        <header style={responsiveStyles.header}>
          <nav style={responsiveStyles.nav}>
            <a href="#" style={responsiveStyles.navLink}>
              HOME
            </a>
            <a href="#" style={responsiveStyles.navLink}>
              PRODUCTS
            </a>
            <img
              src={smallImage}
              alt="Small Illustration"
              style={responsiveStyles.smallImage}
            />
            <a href="#" style={responsiveStyles.navLink}>
              SERVICES
            </a>
            <a href="#" style={responsiveStyles.navLink}>
              CONTACT
            </a>
          </nav>
        </header>

        <div style={responsiveStyles.heroSection}>
          <div style={responsiveStyles.textSection}>
            <h1 style={responsiveStyles.nextGen}>NEXT GEN</h1>
            <h1 style={responsiveStyles.mainTitle}>
              <span style={responsiveStyles.virtualText}>VIRTUAL </span>
              <span style={responsiveStyles.realityText}>REALITY</span>
            </h1>
            <p style={responsiveStyles.subText}>
              Unveiling the Future: The Dawn of Hyper-Realistic Virtual Realms
            </p>
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
              style={responsiveStyles.link}
            >
              <button style={responsiveStyles.button}>See More</button>
            </a>
          </div>

          <div style={responsiveStyles.heroImageContainer}>
            <img
              src={heroImage}
              alt="Hero Boy VR"
              style={responsiveStyles.heroImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px 50px",
    background: "#0B0319",
    borderBottom: "2px solid #333",
    position: "relative",
    zIndex: 1,
  },
  nav: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "20px",
    transition: "color 0.3s",
  },
  smallImage: {
    height: "40px",
    paddingTop: "8px",
    transform: "scale(3.8)",
  },
  heroSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    background: "#0B0319",
    color: "white",
    position: "relative",
    minHeight: "calc(100vh - 70px)",
  },
  textSection: {
    maxWidth: "50%",
  },
  nextGen: {
    fontSize: "120px",
    fontWeight: "bold",
    margin: "0 0 20px 0",
    color: "#fff",
    textShadow: "0 0 20px #6af1e8, 0 0 30px #b53cff",
  },
  virtualText: {
    fontSize: "60px",
    fontWeight: "bold",
    marginBottom: "20px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    background: "linear-gradient(90deg, #6af1e8, #b53cff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  realityText: {
    fontSize: "60px",
    fontWeight: "bold",
    marginBottom: "20px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    background: "linear-gradient(90deg, #b53cff, #DF00BC)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subText: {
    fontSize: "30px",
    margin: "0 0 20px 0",
    color: "#ddd",
  },
  button: {
    padding: "20px 30px",
    fontSize: "22px",
    background: "linear-gradient(90deg, #6af1e8, #DF00BC)",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
  },
  heroImageContainer: {
    position: "absolute",
    top: "150px",
    right: "12%",
    width: "40%",
    transform: "scale(1.7)",
  },
  heroImage: {
    width: "100%",
    borderRadius: "10px",
  },
};

export default App;


  