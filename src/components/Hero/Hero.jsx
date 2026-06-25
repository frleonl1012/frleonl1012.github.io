import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

function Hero() {
  return (
    <Container maxWidth="lg">
      <Box
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h6" color="primary">
            Hola, soy
          </Typography>

          <Typography variant="h1" fontWeight="bold">
            Francisca León
          </Typography>

          <Typography
            variant="h4"
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            Frontend Developer especializada en React
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 4,
              maxWidth: 700,
            }}
          >
            Desarrolladora Full Stack con experiencia en React,
            Spring Boot y Oracle. Me apasiona construir
            interfaces modernas, accesibles y centradas en la
            experiencia de usuario.
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
}

export default Hero;