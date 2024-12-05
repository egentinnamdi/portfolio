import { Container } from "@mui/material";
import Home from "./Home";
import NavBar from "../ui/NavBar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { useRef } from "react";
import Message from "../ui/Message";
import Experience from "./Experience";
import Blog from "./Blog";

function AppLayout() {
  const navScroll = useRef(null);

  return (
    <Container
      component="div"
      maxWidth="xl"
      className="!min-h-screen space-y-20"
    >
      {/* <Message /> */}
      <NavBar />
      <Home navScroll={navScroll} />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact navScroll={navScroll} />
    </Container>
  );
}

export default AppLayout;
