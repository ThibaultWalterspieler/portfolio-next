import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cktg3q1313hn801xkbykwgcz1/master',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_GRAPHCMS_API_KEY;

  return {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const graphcmsClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default graphcmsClient;
