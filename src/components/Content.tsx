import React, { useState, useEffect, ChangeEvent } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTENT_CARDS } from '../graphql/queries';
import {
  GetContentCardsData,
  GetContentCardsVars,
} from '../shared/content.type';
import { Box, Grid, Text } from '@chakra-ui/react';
import SearchBar from './SearchBar';
import ContentCards from './ContentCards';
import LoadingCards from './LoadingCards';

const Content: React.FC = () => {
  const [searchKey, setSearchKey] = useState<string>('');
  const [debounceSearch, setDebouncedSearch] = useState<string>(searchKey);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchKey);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchKey]);

  const { loading, error, data } = useQuery<
    GetContentCardsData,
    GetContentCardsVars
  >(GET_CONTENT_CARDS, {
    variables: { keywords: debounceSearch },
  });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  return (
    <Box as="main">
      <SearchBar searchTerm={searchKey} onSearchChange={handleSearchChange} />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg:
            loading || (data && data.contentCards.edges.length)
              ? 'repeat(3, 1fr)'
              : 'repeat(1, 1fr)',
        }}
        gap={5}
        my={6}
      >
        {loading && <LoadingCards />}
        {error && <Text>Error: {error.message}</Text>}
        {data && <ContentCards cards={data.contentCards.edges} />}
      </Grid>
    </Box>
  );
};

export default Content;
