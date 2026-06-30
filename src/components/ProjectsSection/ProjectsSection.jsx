import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";
import { projects } from "../../data/projects";

const MotionBox = motion.create(Box);

function BrowserPreview({ project }) {
  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: 320, md: 420 },
        borderRadius: 6,
        border: "1px solid",
        borderColor: "border.main",
        background: project.preview.gradient,
        boxShadow: "0 30px 80px rgba(15, 23, 42, 0.14)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          p: 2.5,
          alignItems: "center",
        }}
      >
        {["#f87171", "#fbbf24", "#60a5fa"].map((color) => (
          <Box
            key={color}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: color,
            }}
          />
        ))}
        <Box
          sx={{
            ml: 1,
            px: 2,
            py: 0.6,
            borderRadius: 999,
            bgcolor: "rgba(255,255,255,0.32)",
            fontSize: "0.72rem",
            color: "rgba(10, 15, 30, 0.82)",
            fontWeight: 700,
          }}
        >
          {project.preview.label}
        </Box>
      </Box>

      <Box sx={{ px: { xs: 2.5, md: 3 }, pb: 3 }}>
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            borderRadius: 5,
            bgcolor: "rgba(7, 13, 28, 0.82)",
            color: "#eff6ff",
            minHeight: 250,
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ justifyContent: "space-between", mb: 2.5 }}
          >
            {project.preview.metrics.map((metric) => (
              <Box key={metric.label}>
                <Typography sx={{ fontSize: "0.68rem", opacity: 0.65, mb: 0.4 }}>
                  {metric.label}
                </Typography>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 700 }}>
                  {metric.value}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 1.2,
              alignItems: "end",
              height: 112,
            }}
          >
            {project.preview.bars.map((bar, index) => (
              <Box
                key={`${project.title}-bar-${index}`}
                sx={{
                  borderRadius: 999,
                  height: `${bar}%`,
                  background:
                    "linear-gradient(180deg, rgba(103,232,249,0.95) 0%, rgba(59,130,246,0.95) 100%)",
                  boxShadow: "0 10px 30px rgba(56, 189, 248, 0.22)",
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              position: "relative",
              mt: 3,
              height: 74,
              borderRadius: 4,
              bgcolor: "rgba(255,255,255,0.04)",
              overflow: "hidden",
            }}
          >
            {project.preview.lines.map((line, index) => (
              <Box
                key={`${project.title}-line-${index}`}
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(90deg, transparent 0%, ${line.color} 50%, transparent 100%)`,
                  opacity: 0.9,
                  transform: `translateY(${line.offset}px) skewX(-18deg)`,
                  height: 2,
                }}
              />
            ))}
          </Box>
        </Paper>
      </Box>
    </Paper>
  );
}

function ProjectCard({ project, index }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      sx={{ mb: { xs: 10, md: 14 } }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        direction={index % 2 === 0 ? "row" : "row-reverse"}
        alignItems="center"
      >
        <Grid size={{ xs: 12, md: 6.3 }}>
          <BrowserPreview project={project} />
        </Grid>
        <Grid size={{ xs: 12, md: 5.7 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", md: "2.65rem" },
              lineHeight: 1.05,
              mb: 3,
              letterSpacing: "-0.04em",
            }}
          >
            {project.title}
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 5,
              bgcolor: "surface.subtle",
              border: "1px solid",
              borderColor: "border.soft",
              boxShadow: "0 18px 40px rgba(15, 23, 42, 0.06)",
            }}
          >
            <Typography
              color="text.secondary"
              sx={{ fontSize: { xs: "1rem", md: "1.08rem" }, lineHeight: 1.8, mb: 2.5 }}
            >
              {project.description}
            </Typography>

            <Stack spacing={1.2}>
              {project.highlights.map((highlight) => (
                <Typography
                  key={highlight}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.2,
                    color: "text.secondary",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      mt: "0.58rem",
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      flexShrink: 0,
                    }}
                  />
                  {highlight}
                </Typography>
              ))}
            </Stack>
          </Paper>

          <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap sx={{ mt: 3.5 }}>
            {project.stack.map((item) => (
              <Chip
                key={item}
                label={item}
                sx={{
                  bgcolor: "rgba(255,255,255,0.82)",
                  border: "1px solid",
                  borderColor: "border.soft",
                  color: "text.primary",
                  fontWeight: 600,
                }}
              />
            ))}
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
            <Button variant="contained" href={project.demoUrl} target="_blank" rel="noreferrer">
              Ver caso
            </Button>
            <Button variant="outlined" href={project.codeUrl} target="_blank" rel="noreferrer">
              Explorar stack
            </Button>
          </Stack>
        </Grid>
      </Grid>
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
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos destacados"
          description="Una selección de plataformas y productos digitales que he liderado o construido como desarrolladora fullstack, combinando arquitectura, experiencia de usuario y foco en resultados."
        />

        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </Container>
    </Box>
  );
}

export default ProjectsSection;
