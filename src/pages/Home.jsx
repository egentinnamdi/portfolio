import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

function Home({ navScroll }) {
  const random = Math.round(Math.random() * 100);
  const [position] = useState(random);
  return (
    <Box
      className="!flex flex-col bg-primary lg:h-[85vh] lg:flex-row"
      id="home"
    >
      {/* <Box className="h-"></Box> */}
      {/* <Box className="absolute bottom-0 left-0 right-0 top-0 z-10">
          <img
            src="/icon-javscript.png"
            alt="js"
            className={`absolute left-28 top-64`}
          />
          <img
            src="/icon-react.png"
            alt="js"
            className={`absolute bottom-80 left-32`}
          />
          <img
            src="/icon-javscript.png"
            alt="js"
            className={`absolute left-28 top-64`}
          />
          <img
            src="/icon-javscript.png"
            alt="js"
            className={`absolute left-28 top-64`}
          />
        </Box> */}
      <Box className="relative mt-7 grid !min-h-[50vh] w-full place-items-center lg:h-full lg:w-2/4">
        <Box className="h-96 w-full rounded-t-xl bg-transparent lg:h-[80vh] lg:w-3/4 lg:rounded-t-full">
          <img
            src="/front-pic.png"
            alt="display-image"
            className="h-full w-full object-cover object-top"
          />
        </Box>
      </Box>
      <Stack
        spacing={{
          xs: 4,
          lg: 7,
        }}
        className="flex h-full flex-col items-start justify-center p-10 lg:w-2/4"
      >
        <Typography variant="h5" component="h1" className="capitalize">
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
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
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
