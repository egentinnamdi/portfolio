import { Box, Stack, Typography } from "@mui/material";

function Details({ item }) {
  return (
    <Stack spacing={2} direction="row">
      <Box className="text-white">{item.icon}</Box>
      <Box className="space-y-3 capitalize">
        <Typography variant="body1" className="!font-thin">
          {item.title}
        </Typography>
        <Typography variant="h6">{item.value}</Typography>
      </Box>
    </Stack>
  );
}

export default Details;
