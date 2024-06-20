import { Flex, Icon, Input } from '@chakra-ui/react';
import IonIcon from '@reacticons/ionicons';
import React, { ChangeEvent, FormEvent } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <form role="search" autoComplete="off" onSubmit={handleSubmit}>
      <Flex
        as="label"
        alignItems="center"
        px={3}
        bg="gray.900"
        borderRadius={4}
        border="1px"
        borderColor="gray.700"
      >
        <Icon as={IonIcon} name="search" mr={2} />
        <Input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          aria-label="Search podcasts"
          bg="transparent"
          outline="none"
          w="calc(100% - 24px)"
          border="none"
          px={0}
          sx={{
            _focus: {
              boxShadow: 'none',
            },
          }}
        />
      </Flex>
    </form>
  );
};

export default SearchBar;
