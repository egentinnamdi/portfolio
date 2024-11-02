import { Box, Link, Stack, Typography } from "@mui/material";
import Logo from "./Logo";
import { GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";

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
      <Box className="space-y-5">
        <Typography className="!font-thin capitalize">
          you may also find me on this platforms!
        </Typography>
        <Stack direction="row" spacing={3} className="justify-center">
          <Link
            href="https://www.linkedin.com/in/nnamdi-egenti-988146249"
            target="_blank"
          >
            <LinkedIn />
          </Link>
          <Link href="https://wa.me/2348172843959" target="_blank">
            <WhatsApp />
          </Link>
          <Link href="https://github.com/egentinnamdi" target="_blank">
            <GitHub />
          </Link>
        </Stack>
      </Box>
      <Box
        component="footer"
        className="grid h-16 w-full place-items-center text-center text-lg capitalize text-white"
      >
        &copy; {new Date().getFullYear()} FlexCodes. all rights reserved
      </Box>
    </Box>
  );
}

export default Footer;
