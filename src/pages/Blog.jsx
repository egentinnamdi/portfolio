import { Box, Button, Skeleton, Stack } from "@mui/material";
import Header from "../ui/Header";
import BlogPost from "../ui/BlogPost";
import { useQuery } from "@tanstack/react-query";
import getPosts from "../services/supabase";

function Blog() {
  const { data } = useQuery({
    queryKey: ["fetchPosts"],
    queryFn: () => getPosts(),
  });
  return (
    <Box class="flex min-h-[50vh] flex-col space-y-16" id="blog">
      <Header text="blog" />
      <Stack
        className="h-3/4"
        spacing={5}
        direction={{ lg: "row", xs: "column" }}
      >
        {data ? (
          data?.map((item) => <BlogPost item={item} />)
        ) : (
          <>
            <Skeleton
              variant="rounded"
              className="lg:!w-1/3"
              width="100%"
              animation="wave"
              height="45vh"
            />
            <Skeleton
              variant="rounded"
              className="lg:!w-1/3"
              width="100%"
              animation="wave"
              height="45vh"
            />
            <Skeleton
              variant="rounded"
              className="lg:!w-1/3"
              width="100%"
              animation="wave"
              height="45vh"
            />
          </>
        )}
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
