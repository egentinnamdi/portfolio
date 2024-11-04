import { Box, Stack, Typography } from "@mui/material";
import Header from "../ui/Header";
import WorkArea from "../ui/WorkArea";
import {
  DeveloperModeOutlined,
  PhoneAndroid,
  Router,
} from "@mui/icons-material";
const aboutDetails = [
  {
    icon: <DeveloperModeOutlined fontSize="large" />,
    title: "frontend",
    text: "Bringing designs to life with clean code and an eye for aesthetics, using tools like React.js, Tailwind CSS, and Material UI to ensure responsive, user-friendly interfaces.",
  },
  {
    icon: <Router fontSize="large" />,
    title: "Backend",
    text: "Building robust backend systems using Node.js, Express, and MongoDB, with a focus on security, scalability, and performance.",
  },
  {
    icon: <PhoneAndroid fontSize="large" />,
    title: "mobile app",
    text: "Leveraging React Native to create cross-platform mobile applications that provide consistent user experiences across devices.",
  },
];

function About() {
  return (
    <Box className="min-h-[75vh] space-y-5 lg:p-10" id="about">
      <Header text="about me" />
      <Box className="!min-h-[55vh] justify-between gap-10 space-y-6 lg:flex lg:space-y-0">
        <Box
          component="div"
          className="flex flex-col items-center justify-center gap-10 lg:w-1/4"
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
        <Box className="flex flex-col items-center justify-center space-y-10 p-5 lg:w-3/4">
          <Typography
            variant="body1"
            component="p"
            className="text-justify !leading-loose !tracking-tighter lg:!tracking-normal"
          >
            I'm a dedicated and enthusiastic full-stack developer with over a
            year of hands-on experience in creating dynamic and impactful
            digital solutions. With expertise in both frontend and backend
            technologies, including React.js and Node.js, Im passionate about
            crafting seamless, high-performance applications that provide
            excellent user experiences. Whether it's designing clean,
            pixel-perfect interfaces or developing efficient, scalable backend
            systems, my goal is to bridge the technical and visual aspects of
            software development. I take pride in writing clean, maintainable
            code that not only meets the highest standards of functionality but
            also resonates with the end-users.
          </Typography>
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={5}
            className="w-full"
          >
            {aboutDetails.map((item) => (
              <WorkArea key={item.title} item={item} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
