import { Box, Button, Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";
import { projectGroups } from "../../data/projects";
import { siteContainerSx } from "../../theme/layout";

const MotionBox = motion.create(Box);

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <Box
        component="img"
        src={project.image}
        alt={project.imageAlt ?? project.name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: project.imageAccent,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(255,255,255,0.22), transparent 30%), radial-gradient(circle at bottom left, rgba(255,255,255,0.18), transparent 26%)",
        }}
      />
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          p: 2.5,
          justifyContent: "flex-end",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "1.25rem", md: "1.4rem" },
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            maxWidth: 220,
          }}
        >
          {project.name}
        </Typography>
      </Stack>
    </Box>
  );
}

function ProjectItemCard({ project }) {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 4,
        bgcolor: "rgba(255,255,255,0.88)",
        border: "1px solid",
        borderColor: "border.soft",
        boxShadow: "0 24px 60px rgba(15, 23, 42, 0.1)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backdropFilter: "blur(16px)",
        transition: "transform 180ms ease, box-shadow 180ms ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 34px 76px rgba(15, 23, 42, 0.16)",
        },
      }}
    >
      <Box
        sx={{
          height: { xs: 160, md: 180 },
          bgcolor: "rgba(226, 232, 240, 0.6)",
          borderBottom: "1px solid",
          borderColor: "border.soft",
        }}
      >
        <ProjectImage project={project} />
      </Box>

      <Box sx={{ p: { xs: 2.5, md: 3 } }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.35rem", md: "1.55rem" },
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            mb: 1.2,
          }}
        >
          {project.name}
        </Typography>

        <Typography color="text.secondary" sx={{ lineHeight: 1.75, mb: 2 }}>
          {project.description}
        </Typography>

        {project.url ? (
          <Button
            variant="contained"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            endIcon={<Box component="span" sx={{ fontSize: "0.95rem", lineHeight: 1 }}>↗</Box>}
            sx={{
              alignSelf: "flex-start",
              px: 1.8,
              py: 0.7,
              minWidth: 0,
              fontSize: "0.92rem",
              bgcolor: "#0f766e",
              "&:hover": {
                bgcolor: "#115e59",
              },
            }}
          >
            Ver sitio
          </Button>
        ) : (
          <Button variant="outlined" disabled sx={{ alignSelf: "flex-start", px: 1.8, py: 0.7 }}>
            Proyecto no público
          </Button>
        )}
      </Box>
    </Paper>
  );
}

function ExperienceGroup({ group, index }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      sx={{ mb: { xs: 5, md: 6 } }}
    >
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          overflow: "hidden",
          p: { xs: 3, md: 4.5, xl: 5 },
          borderRadius: 5,
          border: "1px solid",
          borderColor: "border.main",
          background: group.accent,
          boxShadow: "0 32px 90px rgba(15, 23, 42, 0.08)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(255,255,255,0.55), transparent 38%), radial-gradient(circle at bottom left, rgba(255,255,255,0.3), transparent 30%)",
            pointerEvents: "none",
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Stack spacing={1.5} sx={{ mb: 4.5, maxWidth: 760 }}>
            <Typography
              sx={{
                fontSize: "1.2rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "primary.main",
                fontWeight: 800,
              }}
            >
              {group.company}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.1rem", md: "3.35rem" },
                lineHeight: 0.98,
                letterSpacing: "-0.05em",
              }}
            >
              {group.role}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ fontSize: { xs: "1rem", md: "1.04rem" }, lineHeight: 1.8 }}
            >
              {group.summary}
            </Typography>

            {group.tools?.length ? (
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 1 }}>
                {group.tools.map((tool) => (
                  <Chip
                    key={tool}
                    label={tool}
                    sx={{
                      height: 34,
                      px: 0.45,
                      borderRadius: "10px",
                      bgcolor: "#231942",
                      color: "#f8fafc",
                      fontWeight: 700,
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                      "& .MuiChip-label": {
                        px: 1.1,
                      },
                    }}
                  />
                ))}
              </Stack>
            ) : null}
          </Stack>

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {group.projects.map((project) => (
              <Grid key={project.name} size={{ xs: 12, md: 6, xl: 4 }}>
                <ProjectItemCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </MotionBox>
  );
}

function ProjectsSection() {
  return (
    <Box
      id="projects"
      component="section"
      sx={{ py: { xs: 11, md: 16 }, position: "relative" }}
    >
      <Container maxWidth={false} sx={siteContainerSx}>
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos destacados"
          description="Una selección de proyectos organizados por experiencia laboral, mostrando los productos y plataformas en los que he participado recientemente."
        />

        <Stack spacing={{ xs: 4, md: 5 }}>
          {projectGroups.map((group, index) => (
            <ExperienceGroup key={group.company} group={group} index={index} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default ProjectsSection;
