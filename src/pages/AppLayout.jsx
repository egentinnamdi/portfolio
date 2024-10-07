import { Container } from "@mui/material";
import Home from "./Home";
import NavBar from "../ui/NavBar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

function AppLayout() {
  return (
    <Container
      component="div"
      maxWidth="xl"
      className="!min-h-screen space-y-20"
    >
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
}

export default AppLayout;
