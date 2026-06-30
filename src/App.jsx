import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";

function App() {
  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </Box>
  );
}

export default App;
