import React, { Component } from "react";

import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import styles from "./styles";
import theme from "../../commons/theme";
import Taskboard from "../Taskboard";
import CardProduct from "../../Components/Surface/Card";
import AppBars from "../../Components/Surface/AppBars";
class App extends Component {
   render() {
      return (
         <ThemeProvider theme={theme}>
            <AppBars></AppBars>
            <Taskboard />
            <br />
            <CardProduct />
         </ThemeProvider>
      );
   }
}

export default withStyles(styles)(App);
