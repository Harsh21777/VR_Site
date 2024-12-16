

import React, { useEffect, useState } from "react";

const Newsletter = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#0B0319";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.color = "#fff";

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
    heading: {
      ...styles.heading,
      fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "2.5rem",
    },
    description: {
      ...styles.description,
      fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.3rem",
      padding: isMobile ? "20px" : "30px",
    },
    subscribeButton: {
      ...styles.subscribeButton,
      fontSize: isMobile ? "1rem" : isTablet ? "1.5rem" : "2rem",
      padding: isMobile
        ? "10px 30px"
        : isTablet
        ? "12px 50px"
        : "15px 70px",
    },
    innerBox: {
      ...styles.innerBox,
      padding: isMobile ? "20px" : isTablet ? "25px" : "30px",
    },
  };

  return (
    <div style={responsiveStyles.container}>
      <div style={responsiveStyles.outerBox}>
        <div style={responsiveStyles.innerBox}>
          <h5 style={responsiveStyles.heading}>SUBSCRIBE TO OUR NEWSLETTER</h5>
          <p style={responsiveStyles.description}>
            VR Dispatch: Pixels Unleashed, Dreams Delivered . . . where pixels
            ignite and dreams take flight! Here, we decode the language of
            pixels, revealing the hidden realms of virtual triumphs. Buckle up,
            fellow pixel pioneers, as we explore the future—one shimmering dot
            at a time.
          </p>
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            style={responsiveStyles.link}
          >
            <button style={responsiveStyles.subscribeButton}>SUBSCRIBE</button>
          </a>
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
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
    transform: "scale(1.1)",
  },
  outerBox: {
    padding: "5px",
    borderRadius: "30px",
    background: "linear-gradient(180deg, #ff00d9, #00d9ff)",
    boxShadow: "0px 0px 20px rgba(255, 0, 217, 0.5)",
  },
  innerBox: {
    background: "#0B0319",
    padding: "30px",
    borderRadius: "25px",
    textAlign: "center",
    maxWidth: "800px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    textTransform: "uppercase",
  },
  description: {
    fontSize: "1.3rem",
    lineHeight: "1.6",
    paddingBottom: "30px",
    paddingLeft: "30px",
    marginRight: "30px",
    color: "#ccc",
  },
  subscribeButton: {
    background: "linear-gradient(0deg, #ff00d9, #00d9ff)",
    color: "#fff",
    padding: "15px 70px",
    border: "none",
    borderRadius: "50px",
    fontSize: "2rem",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default Newsletter;



