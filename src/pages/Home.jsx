import { Box, Button, Stack, Typography } from "@mui/material";
import Images from "../ui/Images";

const positions = [
  {
    name: "react",
    top: 25,
    left: 15,
  },
  {
    name: "nodejs",
    top: 50,
    left: 5,
  },
  {
    name: "tailwind",
    top: 10,
    left: 15,
  },
  {
    name: "mongo",
    top: 42,
    left: 20,
  },
  {
    name: "git",
    top: 12,
    left: 75,
  },
  {
    name: "javascript",
    top: 30,
    left: 80,
  },
  {
    name: "typescript",
    top: 45,
    left: 85,
  },
  {
    name: "express",
    top: 35,
    left: 2,
  },
  {
    name: "next",
    top: 41,
    left: 68,
  },
];

function Home({ navScroll }) {
  return (
    <Box
      className="!flex flex-col bg-primary lg:h-[85vh] lg:flex-row"
      id="home"
    >
      <Box className="mt-7 grid !min-h-[50vh] w-full place-items-center lg:h-full lg:w-2/4">
        <Box className="relative h-96 w-full rounded-t-xl bg-transparent lg:h-[80vh] lg:w-3/4 lg:rounded-t-full">
          <img
            src="/front-pic.png"
            alt="display-image"
            className="absolute z-10 h-full w-full object-cover object-top"
          />
          <Box className="absolute bottom-0 left-0 right-0 top-0">
            {positions.map((item) => (
              <Images imgName={item.name} left={item.left} top={item.top} />
            ))}
          </Box>
        </Box>
      </Box>
      <Stack
        spacing={{
          xs: 4,
          lg: 7,
        }}
        className="flex h-full flex-col items-start justify-center px-5 py-10 lg:w-2/4 lg:p-10"
      >
        <Typography
          variant="h5"
          component="h1"
          className="capitalize"
          sx={{
            fontSize: {
              xs: "1.3rem",
              lg: "1.5rem",
            },
          }}
        >
          👋hi, i'm <span className="text-text">nnamdi james</span>
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          className="!font-medium capitalize"
          sx={{
            fontSize: {
              xs: "1.8rem",
              lg: "3rem",
            },
          }}
        >
          full stack{" "}
          <span className="rounded-b-md border-b-8 border-util pb-3">
            Developer
          </span>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className="text-justify !leading-loose !tracking-normal"
        >
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 1+ years, I
          still love it as if it was something new.
        </Typography>
        <Stack spacing={4} direction="row">
          <Button
            variant="contained"
            className="!bg-text !py-3 text-center"
            onClick={() =>
              navScroll.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            book a meeting
          </Button>
          <Button
            href="https://ljroxogsifnbeofppyii.supabase.co/storage/v1/object/public/resume/resume.pdf"
            variant="outlined"
            className="!border-text !py-3 text-center"
            target="_blank"
          >
            download cv
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Home;
