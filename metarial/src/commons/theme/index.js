import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  color: {
    darkPrimary: "#388E3C",
    primary: "#22AF22",
    secondary: "#FF5722",
    error: "#F44336"
    //font, button, font-weight, text-form, title,...
  },
  typography: {
    fontFamily: "Roboto"
  },
  shape: {
    borderRadius: "5px",
    backgroundColor: "#FF8855",
    textColor: "#FFFFFF",
    border: "#C8E6C9"
  }
});

export default theme;
