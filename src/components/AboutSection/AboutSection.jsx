import { Avatar, Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";
import { siteContainerSx } from "../../theme/layout";

const MotionBox = motion.create(Box);
const currentAge = new Date().getFullYear() - 1997;

const educationItems = [
  {
    title: "Ingeniería en Informática",
    institution: "Instituto Profesional Duoc UC",
    period: "2022 - 2025",
    type: "Título profesional",
  },
  {
    title: "Técnico Analista Programador Computacional",
    institution: "Instituto Profesional Duoc UC",
    period: "2016 - 2019",
    type: "Título técnico",
  },
];

const certificationItems = [
  "CertiProf Scrum Master",
  "Certificado SENCE Inglés Pre-Intermedio",
  "Certificado Power BI",
];

const strengths = [
  "Desarrollo full stack con React, Java Spring Boot y Oracle.",
  "Integración de APIs REST y modernización de plataformas institucionales.",
  "Comunicación efectiva y trabajo colaborativo con equipos multidisciplinarios.",
  "Resolución de problemas con foco en mantenibilidad y mejora continua.",
];

const weaknesses = [
  "Tiendo a invertir tiempo extra afinando detalles visuales cuando quiero asegurar una experiencia muy pulida.",
  "A veces asumo demasiada carga técnica por autonomía, por lo que he trabajado en delegar y escalar antes.",
  "Suelo profundizar bastante en una solución antes de cerrarla, y hoy busco equilibrar mejor detalle con velocidad.",
];

function InfoCard({
  title,
  eyebrow,
  children,
  delay,
  accent = "rgba(37, 99, 235, 0.1)",
  minHeight,
}) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      style={{ height: "100%" }}
    >
      <Paper
        elevation={0}
        sx={{
          height: "100%",
          minHeight,
          p: { xs: 3, md: 3.4 },
          borderRadius: 3,
          bgcolor: "rgba(255,255,255,0.88)",
          border: "1px solid",
          borderColor: "border.soft",
          boxShadow: "0 22px 50px rgba(15, 23, 42, 0.07)",
        }}
      >
        <Stack spacing={2.2}>
          <Box
            sx={{
              display: "inline-flex",
              alignSelf: "flex-start",
              px: 1.3,
              py: 0.55,
              borderRadius: 999,
              bgcolor: accent,
              color: "primary.main",
              fontSize: "0.76rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </Box>

          <Typography variant="h4" sx={{ fontSize: { xs: "1.5rem", md: "1.75rem" } }}>
            {title}
          </Typography>

          {children}
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
      <Container maxWidth={false} sx={siteContainerSx}>
        <SectionHeading eyebrow="Sobre mí" title="Perfil profesional" />

        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          sx={{ mb: { xs: 3, md: 4 } }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.4, md: 2.8 },
              borderRadius: 3,
              border: "1px solid rgba(37, 99, 235, 0.18)",
              background:
                "linear-gradient(135deg, rgba(219, 234, 254, 0.9) 0%, rgba(239, 246, 255, 0.96) 55%, rgba(224, 242, 254, 0.92) 100%)",
              boxShadow: "0 18px 40px rgba(37, 99, 235, 0.08)",
            }}
          >
            <Stack direction="row" spacing={2.2} alignItems="center">
              <Avatar
                sx={{
                  width: 88,
                  height: 88,
                  fontSize: "2rem",
                  fontWeight: 800,
                  bgcolor: "primary.main",
                  color: "#ffffff",
                }}
              >
                FL
              </Avatar>
              <Stack spacing={0.6}>
                <Typography variant="h4" sx={{ fontSize: "1.8rem", mb: 0.5 }}>
                  Francisca León
                </Typography>
                <Typography color="text.secondary" sx={{ fontWeight: 600 }}>
                  Desarrolladora Full Stack
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 0.3, sm: 1.8 }}
                  sx={{ color: "text.soft", fontSize: "0.95rem" }}
                >
                  <Typography sx={{ fontSize: "inherit", color: "inherit" }}>
                    Edad: {currentAge} años
                  </Typography>
                  <Typography sx={{ fontSize: "inherit", color: "inherit" }}>
                    Ñuñoa, Región Metropolitana, Chile
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </MotionBox>

        <Grid container spacing={{ xs: 3, md: 3.5 }} alignItems="stretch">
          <Grid size={{ xs: 12, lg: 5.5 }}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              style={{ height: "100%" }}
            >
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  minHeight: { lg: 430 },
                  p: { xs: 3, md: 3.8 },
                  borderRadius: 3,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "border.soft",
                  boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,251,255,0.98) 100%)",
                }}
              >
                <Stack spacing={3}>
                  <Typography sx={{ fontWeight: 800, mb: 0.3 }}>
                    Formación y certificaciones
                  </Typography>

                  <Grid container spacing={2}>
                    {educationItems.map((item) => (
                      <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2.4,
                            borderRadius: 2,
                            bgcolor: "surface.subtle",
                            border: "1px solid",
                            borderColor: "border.soft",
                            height: "100%",
                          }}
                        >
                          <Typography sx={{ fontWeight: 800, mb: 0.5 }}>{item.title}</Typography>
                          <Typography color="text.secondary" sx={{ mb: 0.4 }}>
                            {item.institution}
                          </Typography>
                          <Typography sx={{ color: "text.soft", fontSize: "0.95rem" }}>
                            {item.period} · {item.type}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>

                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.4,
                      borderRadius: 2,
                      bgcolor: "surface.subtle",
                      border: "1px solid",
                      borderColor: "border.soft",
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, mb: 1 }}>Certificaciones</Typography>
                    <Stack spacing={1}>
                      {certificationItems.map((item) => (
                        <Typography key={item} color="text.secondary" sx={{ lineHeight: 1.4 }}>
                          {item}
                        </Typography>
                      ))}
                    </Stack>
                  </Paper>
                </Stack>
              </Paper>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, lg: 6.5 }}>
            <Grid container spacing={3} alignItems="stretch">
              <Grid size={{ xs: 12, md: 6 }}>
                <InfoCard
                  title="Fortalezas"
                  eyebrow="Lo que aporto"
                  delay={0.12}
                  accent="rgba(15, 118, 110, 0.12)"
                  minHeight={{ lg: 430 }}
                >
                  <Stack spacing={1.4}>
                    {strengths.map((item) => (
                      <Typography
                        key={item}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.1,
                          color: "text.secondary",
                          lineHeight: 1.75,
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            mt: "0.62rem",
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            bgcolor: "#0f766e",
                            flexShrink: 0,
                          }}
                        />
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                </InfoCard>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <InfoCard
                  title="Debilidades"
                  eyebrow="En mejora"
                  delay={0.18}
                  accent="rgba(249, 115, 22, 0.12)"
                  minHeight={{ lg: 430 }}
                >
                  <Stack spacing={1.4}>
                    {weaknesses.map((item) => (
                      <Typography
                        key={item}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.1,
                          color: "text.secondary",
                          lineHeight: 1.75,
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            mt: "0.62rem",
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            bgcolor: "#f97316",
                            flexShrink: 0,
                          }}
                        />
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                </InfoCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutSection;
