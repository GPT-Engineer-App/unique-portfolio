import React from "react";
import { Box, Container, Heading, SimpleGrid, Text, VStack, Image, Input, Textarea, Button, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            John Doe
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Frontend Developer | React Specialist
          </Text>
        </Box>

        <Box as="section" w="full">
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            <ProjectCard title="Project 1" description="This is a brief description of the project." imageSrc="https://images.unsplash.com/photo-1571842068593-80ead1c01d27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwZGlzcGxheXxlbnwwfHx8fDE3MTQ1ODI0MzN8MA&ixlib=rb-4.0.3&q=80&w=1080" />
            <ProjectCard title="Project 2" description="This is a brief description of the project." imageSrc="https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9qZWN0JTIwZGlzcGxheXxlbnwwfHx8fDE3MTQ1ODI0MzN8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          </SimpleGrid>
        </Box>

        <Box as="section" w="full" bg={bgColor} p={5} borderRadius="lg">
          <Heading as="h2" size="xl" mb={4}>
            Contact Me
          </Heading>
          <VStack spacing={5}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button colorScheme="blue" leftIcon={<FaEnvelope />}>
              Send Message
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

const ProjectCard = ({ title, description, imageSrc }) => {
  return (
    <VStack bg={useColorModeValue("white", "gray.800")} boxShadow="lg" p={4} borderRadius="lg" align="start" spacing={4}>
      <Image borderRadius="lg" src={imageSrc} alt={title} />
      <VStack align="start" spacing={1}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </VStack>
    </VStack>
  );
};

export default Index;
