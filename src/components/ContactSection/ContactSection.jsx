import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { siteContainerSx } from "../../theme/layout";

const MotionPaper = motion.create(Paper);

function ContactIcon({ kind }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (kind === "email") {
    return (
      <Box component="svg" {...common}>
        <path
          d="M4 6.5H20C20.55 6.5 21 6.95 21 7.5V16.5C21 17.05 20.55 17.5 20 17.5H4C3.45 17.5 3 17.05 3 16.5V7.5C3 6.95 3.45 6.5 4 6.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M4 8L12 13.5L20 8" stroke="currentColor" strokeWidth="1.8" />
      </Box>
    );
  }

  if (kind === "phone") {
    return (
      <Box component="svg" {...common}>
        <path
          d="M7.5 4.5H10L11.2 7.6L9.7 9.1C10.55 10.8 11.95 12.2 13.65 13.05L15.15 11.55L18.3 12.8V15.25C18.3 15.8 17.85 16.25 17.3 16.25C10.88 16.25 5.75 11.12 5.75 4.7C5.75 4.15 6.2 3.7 6.75 3.7H7.5V4.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </Box>
    );
  }

  return (
    <Box component="svg" {...common}>
      <path
        d="M8.2 18.25H5.1V8.25H8.2V18.25ZM6.65 6.9C5.65 6.9 4.85 6.1 4.85 5.1C4.85 4.1 5.65 3.3 6.65 3.3C7.65 3.3 8.45 4.1 8.45 5.1C8.45 6.1 7.65 6.9 6.65 6.9ZM19.15 18.25H16.1V13.4C16.1 12.25 16.1 10.8 14.55 10.8C12.95 10.8 12.7 12.05 12.7 13.3V18.25H9.65V8.25H12.6V9.6H12.65C13.05 8.8 14.05 7.95 15.55 7.95C18.65 7.95 19.15 9.95 19.15 12.55V18.25Z"
        fill="currentColor"
      />
    </Box>
  );
}

const contactItems = [
  {
    label: "Correo personal",
    value: "fr.leonl1012@gmail.com",
    href: "mailto:fr.leonl1012@gmail.com",
    kind: "email",
  },
  {
    label: "Teléfono",
    value: "+56 9 7107 2097",
    href: "tel:+56971072097",
    kind: "phone",
  },
  {
    label: "LinkedIn",
    value: "francisca-javiera-leon-labarca",
    href: "https://www.linkedin.com/in/francisca-javiera-leon-labarca/",
    kind: "linkedin",
  },
];

function ContactSection() {
  return (
    <Box id="contact" component="section" sx={{ py: { xs: 11, md: 15 } }}>
      <Container maxWidth={false} sx={siteContainerSx}>
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
            Pongámonos en contacto
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ mt: 4, justifyContent: "center" }}
          >
            {contactItems.map((item) => (
              <Paper
                key={item.label}
                component="a"
                href={item.href}
                target={item.kind === "linkedin" ? "_blank" : undefined}
                rel={item.kind === "linkedin" ? "noreferrer" : undefined}
                elevation={0}
                sx={{
                  textDecoration: "none",
                  color: "text.primary",
                  p: 2.1,
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "border.soft",
                  bgcolor: "rgba(255,255,255,0.82)",
                  minWidth: { md: 280 },
                  textAlign: "left",
                  transition: "transform 180ms ease, box-shadow 180ms ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
                  },
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      bgcolor: "rgba(37, 99, 235, 0.1)",
                      color: "primary.main",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <ContactIcon kind={item.kind} />
                  </Box>

                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 800, mb: 0.2 }}>{item.label}</Typography>
                    <Typography
                      color="text.secondary"
                      sx={{
                        fontSize: "0.95rem",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </MotionPaper>
      </Container>
    </Box>
  );
}

export default ContactSection;
