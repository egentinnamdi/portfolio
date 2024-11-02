import { Box, Button, Stack } from "@mui/material";
import Header from "../ui/Header";
import BlogPost from "../ui/BlogPost";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <Box class="flex min-h-[50vh] flex-col space-y-16" id="blog">
      <Header text="blog" />
      <Stack
        className="h-3/4"
        spacing={5}
        direction={{ lg: "row", xs: "column" }}
      >
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </Stack>
      <Button
        target="_blank"
        href="https://flexcodesdigest.netlify.app/"
        variant="outlined"
        className="!w-2/4 self-center !border-util !py-3 lg:!w-1/4 lg:!p-4 lg:!text-lg"
      >
        see more posts
      </Button>
    </Box>
  );
}

export default Blog;
