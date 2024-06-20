import React from 'react';
import { Box, Skeleton, Stack } from '@chakra-ui/react';

const LoadingCards: React.FC = () => {
  return (
    <>
      {Array.from(Array(5).keys()).map((arr) => (
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          borderColor="grey.700"
          key={`loading-${arr}`}
          data-testid={`loading-card-${arr}`}
        >
          <Skeleton h="48" roundedTop="lg"></Skeleton>
          <Box p="4">
            <Stack spacing="4">
              <Skeleton height="10px" width="40 " rounded="full" />
              <Skeleton height="16px" rounded="full" />
              <Skeleton height="10px" width="48" rounded="full" />
              <Skeleton height="10px" width="48" rounded="full" />
            </Stack>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default LoadingCards;
