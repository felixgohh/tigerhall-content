import IonIcon from '@reacticons/ionicons';
import { ContentCardEdge } from '../shared/content.type';
import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';

interface ContentCardsProps {
  cards: ContentCardEdge[];
}

const ContentCards: React.FC<ContentCardsProps> = ({ cards }) => {
  const convertMinutesToHours = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return hours ? `${hours}h ${remainingMinutes}m` : `${remainingMinutes}m`;
  };

  if (!cards.length) {
    return (
      <Text
        w="full"
        textAlign="center"
        fontSize={{ base: 'sm', lg: 'lg' }}
        mt={10}
      >
        Content not found! Please try another keyword.
      </Text>
    );
  }

  return (
    <>
      {cards.map((card) => (
        <Box
          key={card.name}
          w="full"
          h="full"
          display="flex"
          flexDirection="column"
          borderRadius="xl"
          bg="white"
        >
          <Box position="relative" borderBottom="2px" borderColor="grey.400">
            <Flex
              position="absolute"
              top={0}
              left={0}
              bg="orange.50"
              p={2}
              borderTopLeftRadius={10}
              borderBottomRightRadius={10}
              alignItems="center"
              gap={1}
            >
              <Icon
                as={IonIcon}
                name="pie-chart"
                color="orange.400"
                boxSize={4}
              />
              <Text fontSize="sm" fontWeight={700} color="black">
                0% Completed
              </Text>
            </Flex>
            <Flex
              w={6}
              h={6}
              bg="orange.600"
              p={1}
              borderRadius="full"
              position="absolute"
              left={1}
              bottom={1}
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={IonIcon} name="headset" color="white" boxSize={4} />
            </Flex>
            <Flex
              position="absolute"
              right={1}
              bottom={1}
              py={1}
              px={2}
              borderRadius="full"
              bg="black"
              color="white"
              alignItems="center"
              gap={1}
            >
              <Icon as={IonIcon} name="time-outline" />
              <Text fontWeight={800} fontSize={12}>
                {convertMinutesToHours(card.length)}
              </Text>
            </Flex>
            <Box as="figure" w="full" h={{ base: '30vw', lg: '10vw' }}>
              <Image
                src={card.image.uri}
                alt={card.name}
                w="full"
                h="full"
                objectFit="cover"
                borderTopRadius={10}
              />
            </Box>
          </Box>
          <Box p={3} display="flex" flexDirection="column" flex={1}>
            <Text
              fontSize="sm"
              color="grey.700"
              fontWeight={600}
              lineHeight="normal"
              textTransform="uppercase"
            >
              {card.categories[0].name}
            </Text>
            <Text
              fontSize="lg"
              fontWeight={800}
              mt={1}
              color="black"
              textTransform="capitalize"
              lineHeight="normal"
            >
              {card.name}
            </Text>
            <Box fontSize="sm" textTransform="capitalize" mt={2}>
              <Text color="grey.800" fontWeight={500} lineHeight="normal">
                {card.experts[0].firstName} {card.experts[0].lastName}
              </Text>
              <Text color="grey.700" fontWeight={800} lineHeight="normal">
                {card.experts[0].company || 'Lorem Ipsum'}
              </Text>
            </Box>
            <Flex mt="auto" ml="auto" gap={2}>
              <Button variant="ghost" p={0} minWidth="fit-content">
                <Icon as={IonIcon} name="share-social-outline" fontSize="lg" />
              </Button>
              <Button variant="ghost" p={0} minWidth="fit-content">
                <Icon as={IonIcon} name="bookmark-outline" fontSize="lg" />
              </Button>
            </Flex>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ContentCards;
