import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Content from '../components/Content';
import { GET_CONTENT_CARDS } from '../graphql/queries';
import '@testing-library/jest-dom/extend-expect';

const mocks = [
  {
    request: {
      query: GET_CONTENT_CARDS,
      variables: { keywords: '' },
    },
    result: {
      data: {
        contentCards: {
          edges: [
            {
              __typename: 'Podcast',
              name: 'Test Podcast',
              image: { uri: 'https://img.test.jpg' },
              categories: [{ name: 'Technology' }],
              participants: [
                { firstName: 'John', lastName: 'Mike', company: 'Tech ABC' },
              ],
              length: 120,
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: GET_CONTENT_CARDS,
      variables: { keywords: 'abcascaas' },
    },
    result: {
      data: {
        contentCards: {
          edges: [],
        },
      },
    },
  },
];

describe('Content Component', () => {
  it('shows search bar and render content cards on empty keywords', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Content />
      </MockedProvider>
    );

    const searchInput = screen.getByTestId('search-input-form');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('');

    // Expect loading cards to be rendered while fetching
    expect(screen.getAllByTestId(/loading-card-/)).toHaveLength(5);

    // Wait for the loading to finish
    await waitFor(() =>
      expect(screen.queryByTestId(/loading-card-/)).not.toBeInTheDocument()
    );

    // Expect content cards to be rendered
    expect(screen.getByTestId('content-card-0')).toBeInTheDocument();
  });

  it('shows not found message on empty content cards', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Content />
      </MockedProvider>
    );

    // Fire change event to search input with 'abcascaas' as the value
    const searchInput = screen.getByTestId('search-input-form');
    fireEvent.change(searchInput, { target: { value: 'abcascaas' } });

    // Wait for the loading state to be displayed
    await waitFor(() => {
      expect(screen.getByTestId('loading-card-0')).toBeInTheDocument();
    });

    // Wait for the "not found" message to be displayed after the loading state
    await waitFor(() => {
      expect(screen.getByTestId('not-found-message')).toBeInTheDocument();
    });
  });
});
