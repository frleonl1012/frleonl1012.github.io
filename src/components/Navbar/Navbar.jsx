import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { siteContainerSx } from "../../theme/layout";

const navItems = [
  { label: "Proyectos", href: "#projects" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(249, 250, 251, 0.78)",
        color: "text.primary",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid",
        borderColor: "border.soft",
      }}
    >
      <Container maxWidth={false} sx={siteContainerSx}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1.2 }}>
          <Typography
            component="a"
            href="#home"
            sx={{
              textDecoration: "none",
              color: "text.primary",
              fontSize: "1.9rem",
              fontWeight: 800,
              letterSpacing: "-0.06em",
            }}
          >
            Dev.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 2.5 } }}>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: "text.secondary",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 1.6,
                    "&:hover": {
                      color: "text.primary",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Button
              href="/CV_Francisca_Leon_2026.pdf"
              target="_blank"
              rel="noreferrer"
              variant="contained"
            >
              Descargar CV
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
