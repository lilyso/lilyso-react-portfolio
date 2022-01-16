import React from "react";
import PortfolioContainer from "./components/PortfolioContainer.js";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg="yellow">
        <PortfolioContainer />
        <Footer />
      </Box>
    </>
  );
}

export default App;
