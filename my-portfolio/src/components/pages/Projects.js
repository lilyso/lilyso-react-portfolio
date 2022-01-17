import React from "react";
import { Box, Flex, Image, Wrap} from "@chakra-ui/react";

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
    {
      title: "Work Day Scheduler",
      link: "https://github.com/lilyso/work-day-scheduler",
      img: "./images/work-day-scheduler.png",
      alt: "Work Day Scheduler Homepage",
    },
    {
      title: "Mr Note Taker",
      link: "https://github.com/lilyso/mr-note-taker",
      img: "./images/mr-note-taker.png",
      alt: "Mr Note Taker Home Page",
    },
  ];

  return projects.map((project) => (
    <Box
      w={{ base: '100%', md: '50%', lg: '25%' }}
      mx={4}
      p={4}

    >
      <Image src={project.img} alt={project.alt} />
      <a href={project.link}>
        <p>{project.title}</p>
      </a>
    </Box>
  ));
};

export default function ProjectRender() {
  return <Flex justify="center"><Wrap m={8}>{projectCard()}</Wrap></Flex>
}
