import { DeveloperModeOutlined } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Header from "../ui/Header";

function About() {
  return (
    <Box className="min-h-[75vh] space-y-5 p-10" id="about">
      <Header text="about me" />
      <Box className="!min-h-[55vh] justify-between gap-10 space-y-6 lg:flex lg:space-y-0">
        <Box
          component="div"
          className="flex flex-col items-center justify-center gap-10 lg:w-2/4"
        >
          <Typography
            variant="h1"
            className="!text-7xl !font-medium lg:!text-9xl"
          >
            1+
          </Typography>
          <Typography variant="h5" className="text-center uppercase">
            years working experience
          </Typography>
        </Box>
        <Box className="flex flex-col items-center justify-center space-y-10 p-5 lg:w-2/4">
          <Typography
            variant="body1"
            component="p"
            className="text-justify !leading-loose !tracking-normal lg:!tracking-normal"
          >
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </Typography>
          <Stack direction="row" spacing={5} className="h-36 w-full">
            <Paper
              elevation={10}
              component="div"
              className="grid h-full w-1/3 place-items-center border !border-transparent p-5"
            >
              <DeveloperModeOutlined />
              <Typography>frontend development</Typography>
              <Typography variant="body1" component="p" className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna
              </Typography>
            </Paper>
            <Paper
              elevation={7}
              component="div"
              className="h-full w-1/3 !bg-transparent"
            >
              hi
            </Paper>
            <Paper
              elevation={7}
              component="div"
              className="h-full w-1/3 !bg-transparent"
            >
              hi
            </Paper>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
