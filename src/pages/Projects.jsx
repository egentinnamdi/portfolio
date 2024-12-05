import { Box, Typography } from "@mui/material";
import ProjectsItem from "../ui/ProjectsItem";
import { useState } from "react";
// https://blog-admin-panel.netlify.app/login
// https://flexcodesdigest.netlify.app

// This is one I'm currently working on, it's a blog platform with an integrated admin panel. The admin panel allows the administrator to add, update, and delete blog posts, and it includes a secure login feature that restricts access to only authorized users. The blog itself accessible through the second link to the public, where all posts created through the admin panel are displayed. The project showcases a practical content management system with a focus on security and user experience.
const projects = [
  {
    projName: "liquor haven",
    link: "https://liquor-haven.vercel.app/",
    imgName: "e-commerce",
    description:
      "This project is an e commerce site. It offers a user-friendly interface with easy navigation and a section for product details.. Built with modern web technologies, the site is fully responsive and provides a smooth experience across all devices.",
  },
  {
    projName: "gpt clone",
    link: "https://gpt-3-web-topaz.vercel.app/",
    imgName: "gpt-clone",
    description:
      "This project is a responsive and dynamic web application inspired by the official GPT-3 website. This endeavor not only mirrors the sleek design of the original but also incorporates additional features",
  },
  {
    projName: "weadex",
    link: "https://weadex.netlify.app",
    imgName: "weather",
    description:
      "This project is a weather web application and itis a simple, intuitive weather application that provides real-time weather updates for different locations. It features a clean interface, allowing users to easily search for and view current weather conditions, including temperature, humidity, and forecasts.",
  },
  // {
  //   projName: "something",
  //   link: "something",
  //   imgName: "something",
  //   description: "something",
  // },
];

function Projects() {
  const [span] = useState(true);
  return (
    <Box className="" id="projects">
      <Box className="flex flex-col items-center space-y-12 px-4 py-8 capitalize">
        <Typography
          variant="h2"
          component="h2"
          className="border-b-8 border-util pb-5 !text-4xl !font-light lg:!text-5xl"
        >
          projects
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className="text-center !leading-loose"
        >
          i seek to push the limits of creativity to create high engaging user
          friendly and memorable interactive experiences
        </Typography>
      </Box>
      {/* <Box className="!min-h-screen gap-10 space-y-5 lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:space-y-0"> */}
      <Box className="!min-h-screen gap-10 space-y-5 lg:grid lg:!min-h-60 lg:grid-cols-3 lg:grid-rows-1 lg:space-y-0">
        {/* <ProjectsItem span={span} />
        <ProjectsItem imgName="weather" />
        <ProjectsItem />
        <ProjectsItem span={span} />
        <ProjectsItem />
        <ProjectsItem span={span} />
        <ProjectsItem span={span} />
        <ProjectsItem /> */}
        {projects.map((item) => (
          <ProjectsItem key={item.projName} item={item} />
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
