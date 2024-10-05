import { Box, Paper, Stack, Typography } from "@mui/material";

function About() {
  return (
    <Box className="flex min-h-screen flex-col items-center p-10">
      <Stack spacing={6} className="w-3/4">
        <Box className="flex justify-center">
          <Typography
            variant="h3"
            component="h2"
            className="border-b-8 border-util !pb-5 text-center !font-light capitalize"
          >
            about me
          </Typography>
        </Box>
        <Box
          component="div"
          className="flex items-center justify-center gap-10"
        >
          <Typography variant="h1" className="!text-9xl !font-medium">
            3+
          </Typography>
          <Typography variant="h5" className="uppercase">
            years working experience
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="p"
          className="text-justify !leading-loose lg:text-center"
        >
          I'm a passionate, self-proclaimed designer who specializes in full
          stack development (React.js & Node.js). I am very enthusiastic about
          bringing the technical and visual aspects of digital products to life.
          User experience, pixel perfect design, and writing clear, readable,
          highly performant code matters to me.
        </Typography>
      </Stack>
      <Stack spacing={4} direction="row">
        <Paper elevation={4} className="!h-1/4 !bg-text">
          hi
        </Paper>
        <Paper></Paper>
        <Paper></Paper>
      </Stack>
    </Box>
  );
}

export default About;
