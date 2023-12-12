import { Box, Button, HStack, Text } from "@chakra-ui/react";

export const LayoutDemo = () => {
  <HStack spacing="30px">
    <Box w="300px" h="300px" bgColor="salmon">
      <Text fontSize="6xl" color="white">
        챠크라 ui
      </Text>
      <Button colorScheme="blue">버튼1</Button>
    </Box>
    <Box w="300px" h="300px" bgColor="salmon">
      <Text fontSize="6xl" color="white">
        챠크라 ui
      </Text>
      <Button colorScheme="teal" size="lg">
        버튼2
      </Button>
    </Box>
    <Box w="300px" h="300px" bgColor="salmon">
      <Text fontSize="6xl" color="white">
        챠크라 ui
      </Text>
      <Button colorScheme="teal" variant="outline">
        버튼3
      </Button>
    </Box>
  </HStack>;
};
