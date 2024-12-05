import { Box, Paper, Stack, Typography } from "@mui/material";

function BlogPost({ item }) {
  const { created_at: time, title, author, description, id } = item;
  const transition = `transition-all duration-300 ease-in-out`;
  return (
    <Box
      className={`rounded-xl hover:scale-105 lg:w-1/3 ${transition} min-h-48 cursor-pointer`}
    >
      <a href={`https://flexcodesdigest.netlify.app/post/${id}`}>
        <Box className="relative !h-80">
          <img
            src="/travel.jpg"
            alt="blog"
            className="h-full w-full rounded-xl object-cover"
          />
          <Paper
            elevation={15}
            className={`absolute inset-0 flex !h-full flex-col items-center justify-center !bg-primaryTrans hover:!bg-primaryTransDark ${transition}`}
          >
            <Stack
              spacing={1}
              className="w-5/6 capitalize transition-all duration-500 ease-in-out"
            >
              <Typography
                variant="body1"
                component="p"
                className="!font-medium !text-util"
              >
                {new Date(time).toDateString()}
              </Typography>
              <Typography
                variant="h4"
                component="h3"
                className="!font-medium"
                sx={{
                  fontSize: {
                    xs: "1.7rem",
                    lg: "2rem",
                  },
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                component="span"
                className="!font-medium !text-util"
              >
                {author}
              </Typography>

              <Typography
                variant="body1"
                component="p"
                className="leading-loose"
              >
                {description}
              </Typography>
            </Stack>
          </Paper>
        </Box>
      </a>
    </Box>
  );
}

export default BlogPost;
