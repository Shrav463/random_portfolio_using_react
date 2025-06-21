import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
      spacing={0}
      alignItems="flex-start"
    >
      <Image src={imageSrc} alt={title} width="100%" height="200px" objectFit="cover" />
      <Box padding={4}>
        <Heading size="md" marginBottom={2}>
          {title}
        </Heading>
        <Text color="gray.600" marginBottom={4}>
          {description}
        </Text>
        <HStack spacing={2} color="blue.500" fontWeight="bold">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Card;
