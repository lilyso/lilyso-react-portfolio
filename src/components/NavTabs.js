import React from "react";
import {Tab, Tabs, TabList, Flex,Image, Box,Link } from "@chakra-ui/react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Box maxW={2400}>

      <Flex mb={4}>
      <Image m={4} h={{base:"30", md:"30", lg:"50"}} src="./images/LS-logo-200.png" alt="LS Logo"/>
        <Tabs pt={4} colorScheme="yellow" align="end" variant="unstyled">
          <TabList>
            <Tab _selected={{ color: "white", bg: "black" }}>
              <Link fontSize={{ base: '10px', md: '15px', lg: '18px' }}
                href="#about"
                onClick={() => handlePageChange("About")}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                ABOUT
              </Link>
            </Tab>
            <Tab _selected={{ color: "white", bg: "black" }}>
              <Link fontSize={{ base: '10px', md: '15px', lg: '18px' }}
                href="#portfolio"
                onClick={() => handlePageChange("Projects")}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={
                  currentPage === "Projects" ? "nav-link active" : "nav-link"
                }
              >
                PROJECTS
              </Link>
            </Tab>
            <Tab _selected={{ color: "white", bg: "black" }}>
              <Link fontSize={{ base: '10px', md: '15px', lg: '18px' }}
                href="#blog"
                onClick={() => handlePageChange("Contact")}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                CONTACT
              </Link>
            </Tab>
            <Tab _selected={{ color: "white", bg: "black" }}>
              <Link fontSize={{ base: '10px', md: '15px', lg: '18px' }}
                href="#contact"
                onClick={() => handlePageChange("Resume")}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                RESUME
              </Link>
            </Tab>
          </TabList>
        </Tabs>
      </Flex>

    </Box>
  );
}

export default NavTabs;
