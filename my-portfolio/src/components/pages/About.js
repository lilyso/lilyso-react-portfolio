import React from "react";
import { Box, Image, Flex, Text, Wrap, Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex mx={4} justify="center" > 
    <Wrap>
      <Image w={{ base: '100%', md: '50%', lg: '25%' }} px={4} mx={8} borderRadius="full" src="./images/lilyfeature.png" />
      <Box mx={4} p={4}>
      <Heading>LILY SOURYAPHANH</Heading>
        <Text mb={4} fontSize="2xl">
          Full Stack Developer &amp; Digital Marketing Specialist
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
      </Wrap>
    </Flex>
  );
}
