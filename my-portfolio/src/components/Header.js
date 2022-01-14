import React from "react";
import { Heading, Tab, Tabs, TabList } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Heading p={4}>LILY SO</Heading>
      <Tabs align="end" variant="enclosed">
        <TabList>
          <Tab>About</Tab>
          <Tab>Projects</Tab>
          <Tab>Contact</Tab>
          <Tab>Resume</Tab>
        </TabList>
      </Tabs>
    </div>
  );
}
