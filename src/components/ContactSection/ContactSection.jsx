import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    label: "Email",
    href: "mailto:francisca@example.com",
  },
];

function ContactSection() {
  return (
    <Box id="contact" component="section" sx={{ py: { xs: 11, md: 15 } }}>
      <Container maxWidth="md">
        <MotionPaper
          elevation={0}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 7,
            textAlign: "center",
            border: "1px solid",
            borderColor: "border.main",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.96) 0%, rgba(235,244,255,0.98) 100%)",
            boxShadow: "0 30px 70px rgba(15, 23, 42, 0.08)",
          }}
        >
          <Typography
            sx={{
              color: "primary.main",
              fontSize: "0.82rem",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Contacto
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.3rem", md: "3.4rem" },
              lineHeight: 1,
              letterSpacing: "-0.04em",
              mb: 2.5,
            }}
          >
            ¿Construimos algo potente juntas?
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 620,
              mx: "auto",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.08rem" },
            }}
          >
            Si quieres una desarrolladora que combine criterio visual, lógica de negocio y
            ejecución técnica, este portafolio puede ser el comienzo de una buena
            conversación.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button variant="contained" href="mailto:francisca@example.com">
              Escribirme por correo
            </Button>
            <Button variant="outlined" href="#projects">
              Revisar proyectos
            </Button>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            {contactLinks.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                sx={{ color: "text.secondary" }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        </MotionPaper>
      </Container>
    </Box>
  );
}

export default ContactSection;
