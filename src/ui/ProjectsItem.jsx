import { Box, Paper } from "@mui/material";

function ProjectsItem({ spanLength }) {
  return (
    <Box
      className={`h-48 lg:h-full row-span-${spanLength} rounded-lg bg-transparent`}
    >
      <Paper el></Paper>
    </Box>
  );
}

export default ProjectsItem;
