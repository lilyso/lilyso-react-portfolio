import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex>
      <Image mx={4} borderRadius="full" src="./images/lilysoavatar.png" />
      <Box mx={4} p={4}>
        <Text mb={4} fontSize="4xl">
          FULL STACK DEVELOPER
        </Text>
        <br></br>
        <Text>
          Hi, I'm Lily. I'm a full stack developer in training with experience
          in HTML5, CSS3, JavaScript, JQuery, MySQL, Node.js, MongoDB &amp;
          React.
        </Text>
        <br></br>
        <Text>
          I have over 8 years of experience in Digital Marketing, specialising
          in Content Strategy, Social Media Marketing &amp; Email Marketing.
        </Text>
        <br></br>
        <Text>
          I have worked with brands such as Optus, Audio-Technica &amp; PetO,
          along with a range of small businesses in hospitality and ecommerce.
        </Text>
        <br></br>
        <Text>
          I look forward to hearing about your business and how I can help to
          build your brand and generate more leads.
        </Text>
      </Box>
    </Flex>
  );
}
