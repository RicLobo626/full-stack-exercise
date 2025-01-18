import { createTheme } from "@mui/material/styles";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    background: {
      default: "#e2e8f0",
    },
    primary: {
      main: "#003134",
      contrastText: "#aec1c2",
    },
    secondary: {
      main: "#aec1c2",
      contrastText: "#003134",
    },
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});

const globalStyles = (
  <GlobalStyles
    styles={{
      html: { height: "100%" },
      body: { height: "100%" },
      "#root": { height: "100%" },
    }}
  />
);

type Props = {
  children: ReactNode;
};

export const AppThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      {children}
    </ThemeProvider>
  );
};
