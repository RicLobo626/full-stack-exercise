import { createTheme } from "@mui/material/styles";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#60a5fa",
      contrastText: "#fff",
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
