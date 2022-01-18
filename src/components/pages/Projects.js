import React from "react";
import { Text, Box, Flex, Image, Wrap, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

const projectCard = () => {
  const projects = [
    {
      title: "Beauty Board",
      github: "https://github.com/lilyso/my-beauty-board",
      link:"https://mighty-reef-26126.herokuapp.com/",
      img: "./images/BeautyBoardHome.png",
      alt: "beauty board homepage",
    },
    {
      title: "The Techy Board",
      github: "https://github.com/lilyso/the-techy-blog",
      link:"https://ancient-headland-48213.herokuapp.com/",
      img: "./images/TheTechyBlog.png",
      alt: "The Techy Blog Homepage",
    },
    {
      title: "Fun Night In",
      github: "https://github.com/lilyso/fun-night-in",
      link:"https://lilyso.github.io/fun-night-in/",
      img: "./images/fun-night-in.png",
      alt: "Fun Night In Homepage",
    },
    {
      title: "My Weather Dashboard",
      github: "https://github.com/lilyso/weather-dashboard",
      link:"https://lilyso.github.io/weather-dashboard/",
      img: "./images/my-weather-dashboard.png",
      alt: "My Weather Dashboard Homepage",
    },
    {
      title: "Work Day Scheduler",
      github: "https://github.com/lilyso/work-day-scheduler",
      link:"https://lilyso.github.io/work-day-scheduler/",
      img: "./images/work-day-scheduler.png",
      alt: "Work Day Scheduler Homepage",
    },
    {
      title: "Mr Note Taker",
      github: "https://github.com/lilyso/mr-note-taker",
      link:"https://infinite-everglades-26933.herokuapp.com/",
      img: "./images/mr-note-taker.png",
      alt: "Mr Note Taker Home Page",
    },
  ];

  return projects.map((project) => (
    <Box key={project.index}
      w={{ base: '100%', md: '100%', lg: '30%' }}
      m={4}
      p={4}

    >
      <Link href={project.link} target="_blank" rel="noreferrer">
      <Image src={project.img} alt={project.alt} />
        <Text p={2} color="white" bg="black">{project.title}</Text>
      </Link>
      <Link href={project.github} target="_blank" rel="noreferrer">GitHub <ExternalLinkIcon mx='2px' /></Link>
    </Box>
  ));
};

export default function ProjectRender() {
  return <Flex justify="center"><Wrap m={8}>{projectCard()}</Wrap></Flex>
}
