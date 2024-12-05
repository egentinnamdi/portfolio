import { ArrowOutwardSharp } from "@mui/icons-material";
import { Box, Fab, Paper, Typography } from "@mui/material";

function ProjectsItem({ span, item }) {
  return (
    <Paper
      elevation={10}
      className={`min-h-48 lg:h-full ${span ? "row-span-2" : ""} flex flex-col !rounded-xl border-b border-b-transparent py-3 !transition-all !duration-500 hover:scale-105`}
    >
      <Box className="h-72">
        <img
          src={`${item.imgName}.jpg`}
          alt={item.imgName}
          className="h-full w-full rounded-xl object-cover object-center"
        />
      </Box>

      <Box
        href={item.link}
        className="min-h-1/4 flex w-full flex-col justify-center space-y-3 p-4 capitalize"
      >
        <Typography
          variant="h4"
          component="h3"
          className="relative flex justify-between pt-2 !text-2xl lg:!text-3xl"
        >
          <span className="mt-3">{item.projName}</span>
          <Fab href={item.link}>
            <ArrowOutwardSharp />
          </Fab>
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className="text-justify !text-sm !font-light lg:!leading-relaxed"
        >
          {item.description}
        </Typography>
      </Box>
    </Paper>
  );
}

export default ProjectsItem;
