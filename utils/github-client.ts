import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_GITHUB_API_KEY;

  return {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const githubClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default githubClient;
