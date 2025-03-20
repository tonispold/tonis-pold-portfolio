import { useState } from "react";
import portfolioBanner from "../assets/portfolio_banner.gif";
import portfolioFlightplanning from "../assets/portfolio_flightplanning.gif";
import portfolioMeie from "../assets/portfolio_meie.gif";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

function ProjectsSection() {
  const projects = [
    {
      title: "Fullstack flightplanning web app",
      description:
        "A fullstack web app developed with Java Spring Boot backend and React+Vite frontend",
      image: portfolioFlightplanning,
      link: "https://github.com/tonispold/Flightplanning-fullstack",
    },
    {
      title: "HTML5 Banners",
      description:
        "Such banners i developed during my internship at häk digital marketing agency. The banners and the animations were different depending on the campaign. These banners were developed with HTML, Sass and Javascript.",
      image: portfolioBanner,
      link: "/tonis-pold-portfolio/projects/banner/banner.html",
    },
    {
      title: "Retail company Meie toidukaubad websites rebranding",
      description:
        "This rebranding was done as my bachelors thesis. I am associated with one of the owners of this company and I knew they didn't want anyting flashy and new. Bearing that in mind I tried not to do a total rebranding, but rather a refresh to the website. This has not gone live and was done only for my bachelors thesis. Everything was done in Figma.",
      image: portfolioMeie,
      link: "https://www.figma.com/design/ew13YTJyvRoCiCItFMTF19/L%C3%B5put%C3%B6%C3%B6-protot%C3%BC%C3%BCp?node-id=0-1&t=lMi9n6R9sSNwdSu3-1",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box id="projects" pt={15}>
      <Typography className="section-title" variant="h3" gutterBottom>
        PROJECTS
      </Typography>
      <Grid className="projects-grid" container spacing={3}>
        {projects.map((project, index) => (
          <Grid
            className="grid-item"
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            key={index}
          >
            <Card
              className="grid-card"
              sx={{
                maxWidth: 345,
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                height: "auto",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardMedia
                className="card-img"
                component="img"
                image={project.image}
                alt={project.title}
              />
              <CardContent
                className="project-info"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "150px",
                  transition: "all 0.8s ease-in-out",
                }}
              >
                <Typography className="project-title" variant="h5">
                  {project.title}
                </Typography>

                <Box
                  sx={{
                    maxHeight: hoveredIndex === index ? "200px" : "0px", // Max height transition works smoothly
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform:
                      hoveredIndex === index
                        ? "translateY(0)"
                        : "translateY(10px)",
                    transition:
                      "max-height 0.8s ease-in-out, opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {project.description}
                  </Typography>
                </Box>

                <Box
                  className="project-buttons"
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: 2,
                  }}
                >
                  <Button
                    className="project-btn"
                    variant="contained"
                    color="primary"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Project
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectsSection;
