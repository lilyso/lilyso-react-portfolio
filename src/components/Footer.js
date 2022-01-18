import React from "react";
import { Box, Image, Flex, Center } from "@chakra-ui/react";

export default function About() {
  return (
    <Box mt={4} p={8} bg="black">
      <Center>
        <Flex>
          <a href="https://github.com/lilyso" target="_blank" rel="noreferrer">
            <Image
              mx={4}
              src="./images/GitHub-Mark-Light-64px.png"
              alt="github logo"
            />
          </a>
          <a
            href="https://twitter.com/lilysomusic"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              mx={4}
              src="./images/2021-Twitter-logo---white.png"
              alt="Twitter logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/lily-souryaphanh-04b16a3b/"
            target="_blank"
            rel="noreferrer"
          >
            <Image mx={4} src="./images/LI-In-Bug.png" alt="linkedIn logo" />
          </a>
        </Flex>
      </Center>
    </Box>
  );
}
