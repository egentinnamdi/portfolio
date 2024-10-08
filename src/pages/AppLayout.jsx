import { Container } from "@mui/material";
import Home from "./Home";
import NavBar from "../ui/NavBar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { useRef } from "react";
import Message from "../ui/Message";

function AppLayout() {
  const navScroll = useRef(null);

  return (
    <Container
      component="div"
      maxWidth="xl"
      className="!min-h-screen space-y-20"
    >
      <Message />
      <NavBar />
      <Home navScroll={navScroll} />
      <About />
      <Projects />
      <Contact navScroll={navScroll} />
    </Container>
  );
}

export default AppLayout;
