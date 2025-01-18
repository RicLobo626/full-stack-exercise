import { Refresh } from "@mui/icons-material";
import { Alert, AlertTitle, Box, Button } from "@mui/material";

type Props = {
  onReset: () => void;
};

export const ErrorFallback = ({ onReset }: Props) => {
  return (
    <Alert
      severity="error"
      variant="filled"
      action={
        <Button
          onClick={onReset}
          startIcon={<Refresh />}
          color="inherit"
          sx={{ marginBlock: "auto", marginInlineEnd: "1rem" }}
        >
          Reset
        </Button>
      }
    >
      <AlertTitle>An error has occurred</AlertTitle>
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>Something went wrong</Box>
    </Alert>
  );
};
