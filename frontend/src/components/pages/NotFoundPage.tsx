import { Home, SentimentVeryDissatisfied } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";

type Props = {
  title?: string;
  text?: string;
};

export const NotFoundPage = ({
  title = "404 Not found",
  text = "The page you are looking for does not exist.",
}: Props) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: {
            xs: "1.6rem",
            sm: "2.4rem",
          },
          fontWeight: "bold",
          textAlign: "center",
          color: "primary.main",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.4rem",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          gap: "1rem",
        }}
      >
        {text}
        <SentimentVeryDissatisfied fontSize="large" aria-hidden="true" />
      </Typography>

      <Button component={Link} startIcon={<Home />} to="/" sx={{ marginBlockStart: "1rem" }}>
        Back to Home
      </Button>
    </Box>
  );
};
