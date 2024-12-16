

import React, { useEffect, useState } from "react";
import GooglePlayBadge from "../images/image 9.png";
import AppStoreBadge from "../images/image 8.png";
import TwitterIcon from "../images/Twitter.png";
import YouTubeIcon from "../images/YouTube.png";
import FacebookIcon from "../images/Facebook F.png";
import InstagramIcon from "../images/Instagram.png";

const AppDownloadSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#0B0319";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.color = "#fff";
    document.body.style.height = "100vh";
    document.body.style.overflowX = "hidden";

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
    nav: {
      ...styles.nav,
      flexDirection: isMobile ? "row" : "row",  
      justifyContent: isMobile ? "space-between" : "space-between", 
      gap: isMobile ? "15px" : "50px", 
    },
    content: {
      ...styles.content,
      padding: isMobile ? "10px" : isTablet ? "15px" : "20px",
    },
    heading: {
      ...styles.heading,
      fontSize: isMobile ? "1.8rem" : isTablet ? "2.5rem" : "3rem",
    },
    description: {
      ...styles.description,
      fontSize: isMobile ? "1rem" : isTablet ? "1.1rem" : "1.2rem",
      lineHeight: isMobile ? "1.5" : "1.8",
    },
    badges: {
      ...styles.badges,
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "10px" : "20px",
    },
    badge: {
      ...styles.badge,
      width: isMobile ? "150px" : isTablet ? "170px" : "180px",
    },
    footer: {
      ...styles.footer,
      flexDirection: isMobile ? "column" : "row",
      textAlign: isMobile ? "center" : "left",
    },
    footerLinks: {
      ...styles.footerLinks,
      flexDirection: isMobile ? "column" : "row",
      fontSize: isMobile ? "18px" : isTablet ? "22px" : "25px",
    },
    socialIcons: {
      ...styles.socialIcons,
      gap: isMobile ? "10px" : "20px",
      transform: isMobile ? "scale(1.5)" : "scale(2)",
    },
  };

  return (
    <div style={responsiveStyles.container}>
      <nav style={responsiveStyles.nav}>
        <a href="#help" style={responsiveStyles.navLink}>Help</a>
        <a href="#about" style={responsiveStyles.navLink}>About Us</a>
        <a href="#company" style={responsiveStyles.navLink}>Company</a>
        <a href="#services" style={responsiveStyles.navLink}>Services</a>
        <a href="#contact" style={responsiveStyles.navLink}>Contact</a>
      </nav>

      <div style={responsiveStyles.content}>
        <h2 style={responsiveStyles.heading}>Download our App</h2>
        <p style={responsiveStyles.description}>
          Connect with friends across the globe. Multiplayer VR games let you team up, compete, 
          or simply hang out in shared spaces. Connect with friends across the globe. 
          Multiplayer VR games let you team up, compete, or simply hang out in shared spaces.
        </p>

        <div style={responsiveStyles.badges}>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src={GooglePlayBadge} alt="Google Play" style={responsiveStyles.badge} />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={AppStoreBadge} alt="App Store" style={responsiveStyles.badge} />
          </a>
        </div>
      </div>

      <footer style={responsiveStyles.footer}>
        <div style={responsiveStyles.footerLinks}>
          <a href="#terms" style={responsiveStyles.footerLink}>Terms</a>
          <a href="#privacy" style={responsiveStyles.footerLink}>Privacy</a>
          <a href="#conditions" style={responsiveStyles.footerLink}>Conditions</a>
        </div>
        <p style={responsiveStyles.copyright}>&copy; 2024 VR ZONE Ltd. All Rights Reserved</p>
        <div style={responsiveStyles.socialIcons}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" style={responsiveStyles.iconImage} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={YouTubeIcon} alt="YouTube" style={responsiveStyles.iconImage} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" style={responsiveStyles.iconImage} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" style={responsiveStyles.iconImage} />
          </a>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
    width: "100%",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    gap: "50px",
    width: "100%",
    maxWidth: "1200px",
    fontSize: "25px",
    marginBottom: "30px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  content: {
    textAlign: "center",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    width: "100%",
    maxWidth: "1200px",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    marginBottom: "40px",
    color: "#ccc",
    maxWidth: "700px",
  },
  badges: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "50px",
  },
  badge: {
    width: "180px",
    cursor: "pointer",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderTop: "2px solid",
    borderImage: "linear-gradient(90deg, #00d9ff, #ff00d9) 1",
    paddingTop: "20px",
    color: "#ccc",
    textAlign: "center",
    fontSize: "1rem",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "10px",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "1.5rem",
    transform: "scale(2)",
    marginRight: "100px",
  },
};

export default AppDownloadSection;
