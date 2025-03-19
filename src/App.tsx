import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ArrowCircleDown, Email, GitHub, LinkedIn } from "@mui/icons-material";
import "./App.css";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function App() {
  const [fixedNav, setFixedNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.getElementById("nav");
      if (navElement) {
        const rect = navElement.getBoundingClientRect();
        if (rect.top <= 0) {
          setFixedNav(true);
        } else {
          setFixedNav(false);
        }
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box className="bg"></Box>
      <Box id="hero-section">
        <Box className="hero-box">
          <Typography className="hero-title" variant="h2">
            TÕNIS PÕLD
          </Typography>
          <Typography className="hero-text" variant="h5" color="white">
            Bachelor of Science in Engineering
          </Typography>
          <ArrowCircleDown className="arrow-down-icon" />
        </Box>
      </Box>
      <Box className="content-box">
        <AppBar
          id="nav"
          position="sticky"
          sx={{
            backgroundColor: fixedNav
              ? "#5d455f"
              : "rgba(255, 255, 255, 0.175)",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          <Toolbar>
            <Box id="section-btns" sx={{ display: "flex", gap: 2 }}>
              <Button
                color="inherit"
                onClick={(e) => handleScroll(e, "about-section")}
              >
                About
              </Button>
              <Button
                color="inherit"
                onClick={(e) => handleScroll(e, "projects-section")}
              >
                Projects
              </Button>
              <Button
                color="inherit"
                onClick={(e) => handleScroll(e, "skills-section")}
              >
                Skills
              </Button>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box className="icon-btns-box" sx={{ display: "flex", gap: 1 }}>
              <Button
                className="icon-button"
                color="inherit"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/t%C3%B5nis-p%C3%B5ld-055833226/",
                    "_blank"
                  )
                }
              >
                <LinkedIn />
              </Button>
              <Button
                className="icon-button"
                color="inherit"
                onClick={() =>
                  window.open("https://github.com/tonispold", "_blank")
                }
              >
                <GitHub />
              </Button>
              <Button
                className="icon-button"
                color="inherit"
                onClick={() =>
                  window.open("mailto:poldtonis@gmail.com", "_blank")
                }
              >
                <Email />
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Container id="content" maxWidth="lg" sx={{ mt: 4 }}>
          {/* About Section */}
          <motion.div
            id="about-section"
            className="section"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AboutSection />
          </motion.div>

          {/* Projects Section */}
          <motion.div
            id="projects-section"
            className="section"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectsSection />
          </motion.div>

          {/* Skills Section */}
          <motion.div
            id="skills-section"
            className="section"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SkillsSection />
          </motion.div>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
