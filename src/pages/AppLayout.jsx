import { Container } from "@mui/material";
import Home from "./Home";
import NavBar from "../ui/NavBar";
import About from "./About";
import Portfolio from "./portfolio";
import Contact from "./Contact";

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
      <Portfolio />
      <Contact />
    </Container>
  );
}

export default AppLayout;
