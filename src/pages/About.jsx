import { Box, Paper, Stack, Typography } from "@mui/material";

function About() {
  return (
    <Box className="min-h-[50vh] space-y-10 p-10">
      <Box className="flex justify-center">
        <Typography
          variant="h3"
          component="h2"
          className="border-b-8 border-util !pb-5 text-center !font-light capitalize"
        >
          about me
        </Typography>
      </Box>
      <Box className="!min-h-96 justify-between gap-10 lg:flex">
        <Box
          component="div"
          className="flex flex-col items-center justify-center gap-10"
        >
          <Typography variant="h1" className="!text-9xl !font-medium">
            3+
          </Typography>
          <Typography variant="h5" className="text-center uppercase">
            years working experience
          </Typography>
        </Box>
        <Box className="flex flex-col items-center justify-center space-y-7 p-5">
          <Typography
            variant="body1"
            component="p"
            className="text-justify !leading-loose lg:text-center"
          >
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </Typography>
          <Stack direction="row" spacing={5} className="h-36 w-full">
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
