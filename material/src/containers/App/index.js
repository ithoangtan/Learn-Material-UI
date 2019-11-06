import React, { Component } from "react";

import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import styles from "./styles";
import theme from "../../commons/theme";
import Taskboard from "../Taskboard";
import CardProduct from "../../Components/Surface/Card";

class App extends Component {
   render() {
      return (
         <ThemeProvider theme={theme}>
            <Taskboard />
            <br />
            <CardProduct />
         </ThemeProvider>
      );
   }
}

export default withStyles(styles)(App);
