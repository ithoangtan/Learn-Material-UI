import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

// eslint-disable-next-line
import PageProTip from "./Components/UsageQuickStart/PageProTip";

export default function App() {
   return (
      <Container maxWidth="sm">
         <PageProTip />{" "}
         <Button variant="contained" color="primary">
            Hello World
         </Button>
      </Container>
   );
}
