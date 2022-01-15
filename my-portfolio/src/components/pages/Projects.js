import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

const projectCard = () => {
  const projects = [
    {
      title: "Beauty Board",
      link: "https://github.com/lilyso/my-beauty-board",
      img: "./images/BeautyBoardHome.png",
      alt: "beauty board homepage",
    },
    {
      title: "The Techy Board",
      link: "https://github.com/lilyso/the-techy-blog",
      img: "./images/TheTechyBlog.png",
      alt: "The Techy Blog Homepage",
    },
    {
      title: "Fun Night In",
      link: "https://github.com/lilyso/fun-night-in",
      img: "./images/fun-night-in.png",
      alt: "Fun Night In Homepage",
    },
    {
      title: "My Weather Dashboard",
      link: "https://github.com/lilyso/weather-dashboard",
      img: "./images/my-weather-dashboard.png",
      alt: "My Weather Dashboard Homepage",
    },
  ];

  return projects.map((project) => (
    <Box
      flex="wrap"
      mx={4}
      p={4}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={project.img} alt={project.alt} />
      <a href={project.link}>
        <p>{project.title}</p>
      </a>
    </Box>
  ));
};

export default function ProjectRender() {
  return <Flex mx={4}>{projectCard()}</Flex>;
}
