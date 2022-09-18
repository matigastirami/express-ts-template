import startApolloServer from './src/app';
import { typeDefs } from './src/graphql/type-defs';
import env from './src/lib/env';
import { resolvers } from './src/resolvers';

const port = env.PORT;

(
  async () => await startApolloServer(port, typeDefs, resolvers)
)();