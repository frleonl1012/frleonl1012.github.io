import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { siteContainerSx } from "../../theme/layout";

const MotionBox = motion.create(Box);

function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 12, md: 16 },
        pb: { xs: 10, md: 14 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top left, rgba(16, 185, 129, 0.18), transparent 26%), radial-gradient(circle at 90% 20%, rgba(37, 99, 235, 0.16), transparent 20%), linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(246,248,252,1) 100%)",
        }}
      />

      <Container maxWidth={false} sx={{ ...siteContainerSx, position: "relative" }}>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{ maxWidth: 920 }}
        >
          <Typography
            sx={{
              color: "primary.main",
              fontSize: "0.94rem",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Hola, mi nombre es
          </Typography>

          <Typography
            variant="h1"
            sx={{
              maxWidth: 880,
              fontSize: { xs: "3.1rem", md: "4.15rem" },
              lineHeight: { xs: 1, md: 0.97 },
              letterSpacing: "-0.065em",
            }}
          >
            Francisca León.
            <Box component="span" sx={{ display: "block", color: "text.soft" }}>
              Desarrolladora Full Stack
            </Box>
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 4,
              maxWidth: 760,
              fontSize: { xs: "1.05rem", md: "1.22rem" },
              lineHeight: 1.85,
            }}
          >
            Construyo aplicaciones y funcionalidades end-to-end con foco en
            mantenibilidad, claridad visual y experiencia de usuario. Me muevo con
            comodidad entre frontend, backend e integración de sistemas.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 5 }}>
            <Button variant="contained" href="#projects">
              Ver proyectos
            </Button>
            <Button variant="outlined" href="#contact">
              Contactar
            </Button>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default Hero;
