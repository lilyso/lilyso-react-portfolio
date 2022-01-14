import React from "react";
import { Heading, Tab, Tabs, TabList, Flex } from "@chakra-ui/react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <Flex mb={4}>
        <Heading p={4}>LILY SO</Heading>
        <Tabs p={4} colorScheme="yellow" align="end" variant="unstyled">
          <TabList>
            <Tab _selected={{ color: "white", bg: "blue.200" }}>
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                ABOUT
              </a>
            </Tab>
            <Tab _selected={{ color: "white", bg: "blue.200" }}>
              <a
                href="#home"
                onClick={() => handlePageChange("Projects")}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={
                  currentPage === "Projects" ? "nav-link active" : "nav-link"
                }
              >
                PROJECTS
              </a>
            </Tab>
            <Tab _selected={{ color: "white", bg: "blue.200" }}>
              <a
                href="#blog"
                onClick={() => handlePageChange("Contact")}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                CONTACT
              </a>
            </Tab>
            <Tab _selected={{ color: "white", bg: "blue.200" }}>
              <a
                href="#contact"
                onClick={() => handlePageChange("Resume")}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                RESUME
              </a>
            </Tab>
          </TabList>
        </Tabs>
      </Flex>
    </div>
  );
}

export default NavTabs;
