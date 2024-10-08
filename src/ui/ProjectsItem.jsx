import { ArrowOutwardSharp } from "@mui/icons-material";
import { Box, Fab, Paper, Typography } from "@mui/material";

function ProjectsItem({ span }) {
  return (
    <Paper
      elevation={10}
      className={`min-h-48 lg:h-full ${span ? "row-span-2" : ""} flex flex-col !rounded-xl border-b border-b-transparent py-3`}
    >
      <Box className="h-3/4">
        <img
          src="/e-commerce.jpg"
          alt="e-commerce"
          className="h-full w-full rounded-xl object-cover object-center"
        />
      </Box>

      <Box className="flex h-1/4 w-full flex-col justify-center p-4 capitalize">
        <Typography
          variant="h4"
          component="h3"
          className="relative flex justify-between pt-2 !text-2xl lg:!text-3xl"
        >
          vpn app ui design
          <Fab>
            <ArrowOutwardSharp />
          </Fab>
        </Typography>
        <Typography variant="body1" component="p" className="!font-light">
          vpm app ui design
        </Typography>
      </Box>
    </Paper>
  );
}

export default ProjectsItem;
