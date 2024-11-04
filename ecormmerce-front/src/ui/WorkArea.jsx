import { Paper, Typography } from "@mui/material";

function WorkArea({ item }) {
  const { icon, title, text } = item;
  return (
    <Paper
      elevation={15}
      component="div"
      className="flex h-80 flex-col items-center justify-evenly border !border-transparent p-5 capitalize lg:w-1/3"
    >
      {icon}
      <Typography variant="h6" component="h3" className="text-center">
        {title} development
      </Typography>
      <Typography
        variant="body1"
        component="p"
        className="text-center !leading-relaxed"
      >
        {text}
      </Typography>
    </Paper>
  );
}

export default WorkArea;
