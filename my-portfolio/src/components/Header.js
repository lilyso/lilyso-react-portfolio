import React from "react";
import { Heading, Tab, Tabs, TabList, Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Flex>
        <Heading p={4}>LILY SO</Heading>
        <Tabs p={4} colorScheme="yellow" align="end" variant="unstyled">
          <TabList>
            <Tab _selected={{ color: "white", bg: "blue.200" }}>About</Tab>
            <Tab _selected={{ color: "white", bg: "blue.200" }}>Projects</Tab>
            <Tab _selected={{ color: "white", bg: "blue.200" }}>Contact</Tab>
            <Tab _selected={{ color: "white", bg: "blue.200" }}>Resume</Tab>
          </TabList>
        </Tabs>
      </Flex>
    </div>
  );
}
