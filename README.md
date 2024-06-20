# TigerHall Content

TigerHall Content is a single page application that provides search results (content) dynamically as the user changes the keyword in the search input, with a 300ms delay to optimize performance and user experience.

## Tech Stack

- React.js
- TypeScript
- GraphQL
- Apollo Client
- Chakra UI
- Jest

## Setup Instructions

1.  **Clone the repository**

    `git clone git@github.com:felixgohh/tigerhall-content.git`

    `cd tigerhall-content`

2.  **Install dependencies**

    `npm install`

3.  **Create a `.env` file**

    In the root directory of the project, create a `.env` file and add the following line:

    `REACT_APP_GQL_URI=your_graphql_endpoint_here`

    Replace `your_graphql_endpoint_here` with the actual GraphQL endpoint URI.

4.  **Start the development server**
    `npm start`

    This will start the application on `http://localhost:3000`.

## Running Tests

To run the tests using Jest, use the following command:

`npm test`

This will execute all the tests and provide a summary of the test results in the terminal.
