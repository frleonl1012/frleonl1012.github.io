import {
  Avatar,
  Box,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";

const MotionBox = motion.create(Box);

const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "MUI", "JavaScript", "TypeScript", "Framer Motion", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "REST APIs", "Oracle", "SQL", "Integraciones"],
  },
  {
    title: "Forma de trabajo",
    items: ["Arquitectura limpia", "Accesibilidad", "Git", "QA funcional", "UX thinking", "Trabajo colaborativo"],
  },
];

function StackCard({ title, items, delay }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 5,
          height: "100%",
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "border.soft",
          boxShadow: "0 20px 50px rgba(15, 23, 42, 0.06)",
        }}
      >
        <Typography variant="h5" sx={{ fontSize: "1.35rem", mb: 2.5 }}>
          {title}
        </Typography>
        <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
          {items.map((item) => (
            <Chip
              key={item}
              label={item}
              sx={{
                bgcolor: "surface.subtle",
                border: "1px solid",
                borderColor: "border.soft",
                color: "text.primary",
                fontWeight: 600,
              }}
            />
          ))}
        </Stack>
      </Paper>
    </MotionBox>
  );
}

function AboutSection() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 11, md: 16 },
        background:
          "radial-gradient(circle at top left, rgba(34, 197, 94, 0.08), transparent 32%), radial-gradient(circle at bottom right, rgba(37, 99, 235, 0.08), transparent 30%)",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Desarrollo productos con visión de negocio y detalle técnico"
          description="Trabajo de punta a punta: desde el modelado de datos y la lógica del backend hasta interfaces claras, rápidas y consistentes para el usuario final."
        />

        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="start">
          <Grid size={{ xs: 12, md: 4.6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 6,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "border.soft",
                  boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
                }}
              >
                <Stack spacing={3}>
                  <Stack direction="row" spacing={2.2} alignItems="center">
                    <Avatar
                      sx={{
                        width: 92,
                        height: 92,
                        fontSize: "2.1rem",
                        fontWeight: 800,
                        bgcolor: "primary.main",
                        color: "#08111f",
                      }}
                    >
                      FL
                    </Avatar>
                    <Box>
                      <Typography variant="h4" sx={{ fontSize: "1.7rem", mb: 0.5 }}>
                        Francisca León
                      </Typography>
                      <Typography color="text.secondary">
                        Desarrolladora Fullstack
                      </Typography>
                    </Box>
                  </Stack>

                  <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                    Me interesa construir soluciones robustas, mantenibles y con una
                    experiencia de uso cuidada. Disfruto convertir requerimientos complejos
                    en interfaces simples y flujos confiables.
                  </Typography>

                  <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                    Bajo mi rol fullstack he participado en mejoras evolutivas, migraciones,
                    integraciones y desarrollo de nuevas funcionalidades para plataformas
                    internas y productos digitales orientados a operación y negocio.
                  </Typography>

                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.4,
                      borderRadius: 4,
                      bgcolor: "surface.subtle",
                      border: "1px solid",
                      borderColor: "border.soft",
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, mb: 0.8 }}>
                      Enfoque principal
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      Experiencias frontend claras, integración limpia con backend y código
                      que sea fácil de extender por el equipo.
                    </Typography>
                  </Paper>
                </Stack>
              </Paper>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 7.4 }}>
            <Grid container spacing={3}>
              {stackGroups.map((group, index) => (
                <Grid key={group.title} size={{ xs: 12, md: index === 2 ? 12 : 6 }}>
                  <StackCard title={group.title} items={group.items} delay={index * 0.08} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutSection;
