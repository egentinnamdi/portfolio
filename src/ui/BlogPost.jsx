import { Box } from "@mui/material";

function BlogPost() {
  return (
    <Box className="rounded-xl border border-white lg:w-1/3">
      <Box className="h-3/4">
        <img
          src="/e-commerce.jpg"
          alt="blog"
          className="h-full w-full rounded-xl object-cover"
        />
      </Box>
    </Box>
  );
}

export default BlogPost;
