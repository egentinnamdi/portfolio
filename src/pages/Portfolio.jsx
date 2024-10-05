import { Box, Typography } from "@mui/material";
import PortfolioItem from "../ui/PortfolioItem";

function Portfolio() {
  return (
    <Box className="">
      <Box className="flex flex-col items-center space-y-12 px-4 py-8 capitalize">
        <Typography
          variant="h2"
          component="h2"
          className="border-b-8 border-util pb-5 !font-light"
        >
          portfolio
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
      <Box className="min-h-screen gap-3 space-y-5 lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:space-y-0">
        <PortfolioItem spanLength={2} />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem spanLength={2} />
        <PortfolioItem />
        <PortfolioItem spanLength={2} />
        <PortfolioItem spanLength={2} />
        <PortfolioItem />
      </Box>
    </Box>
  );
}

export default Portfolio;
