import { Box, Button, Typography } from "@mui/material";
import skillsImage from "../assets/skills.png";
import skillsBackImage from "../assets/lopetamine.jpg";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

function SkillsSection() {
  return (
    <Box id="skills" paddingY={15}>
      <Typography className="section-title" variant="h3" gutterBottom>
        SKILLS
      </Typography>
      <Box
        className="skills-box"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography
          className="skills-box-text"
          color="text.secondary"
          sx={{ maxWidth: "500px", width: "60%" }}
        >
          During my studies I have learned about many different coding
          languages, algorithms, databases and so on. Some, which I have learned
          more than the others, I've brought out in the picture beside. I am
          also fluent in both Estonian and English. I have strong communication
          skills and I am a quick learner.
        </Typography>

        {/* Flip Card Effect on Hover */}
        <Box
          className="card"
          sx={{
            width: "280px",
            height: "300px",
            perspective: "1000px",
            cursor: "pointer",
            "&:hover .card-inner": {
              transform: "rotateY(180deg)",
            },
          }}
        >
          <Box
            className="card-inner"
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Front Side */}
            <Box
              className="card-front"
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.5rem",
                background: "white",
                border: "1px solid #e5e7eb",
              }}
            >
              <img
                className="skills-front-img"
                src={skillsImage}
                alt="Skills"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem",
                }}
              />
            </Box>

            {/* Back Side */}
            <Box
              className="card-back"
              sx={{
                margin: "auto 0",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.5rem",
                background: "#896f8c",
                color: "white",
                transform: "rotateY(180deg)",
                textAlign: "center",
                fontSize: "1.2rem",
                padding: "20px",
              }}
            >
              <img
                className="skills-back-img"
                src={skillsBackImage}
                alt="Back"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem",
                }}
              />
              <Box className="skills-icons">
                <Button
                  className="skills-icon-btn"
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
                  className="skills-icon-btn"
                  color="inherit"
                  onClick={() =>
                    window.open("https://github.com/tonispold", "_blank")
                  }
                >
                  <GitHub />
                </Button>
                <Button
                  className="skills-icon-btn"
                  color="inherit"
                  onClick={() =>
                    window.open("mailto:poldtonis@gmail.com", "_blank")
                  }
                >
                  <Email />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SkillsSection;
