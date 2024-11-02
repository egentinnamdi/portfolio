import { Box, Typography } from "@mui/material";
import ProjectsItem from "../ui/ProjectsItem";
import { useState } from "react";

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
      <Box className="!min-h-screen gap-10 space-y-5 lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:space-y-0">
        <ProjectsItem span={span} />
        <ProjectsItem />
        <ProjectsItem />
        <ProjectsItem span={span} />
        <ProjectsItem />
        <ProjectsItem span={span} />
        <ProjectsItem span={span} />
        <ProjectsItem />
      </Box>
    </Box>
  );
}

export default Projects;
