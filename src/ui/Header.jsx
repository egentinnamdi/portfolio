import { Box, Typography } from "@mui/material";

function Header({ text }) {
  return (
    <Box className="flex justify-center">
      <Typography
        variant="h3"
        component="h2"
        className="border-b-8 border-util !pb-5 text-center !text-4xl !font-light capitalize lg:!text-5xl"
      >
        {text}
      </Typography>
    </Box>
  );
}

export default Header;
