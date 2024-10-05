import { Box, Stack, Typography } from "@mui/material";
import Logo from "./Logo";

function Footer() {
  return (
    <Box className="flex min-h-[30vh] flex-col items-center justify-center space-y-12">
      <Box className="grid place-items-center space-y-3">
        <Logo />
        <Typography
          variant="subtitle1"
          component="p"
          className="text-center !font-light capitalize"
        >
          crafting innovative solutions for your unique vision
        </Typography>
      </Box>
      <Box>
        <Typography className="!font-thin capitalize">
          you may also find me on this platforms!
        </Typography>
        <Stack direction="row" spacing={3}></Stack>
      </Box>
    </Box>
  );
}

export default Footer;
