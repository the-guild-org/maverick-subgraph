# Graph Client deployed on Worker

This is a demonstration of `graph-client` deployed on Cloudflare Workers. This API uses
[response caching plugin from GraphQL Mesh](https://the-guild.dev/graphql/mesh/docs/plugins/response-caching)
which helps reduce the calls to the origin server. A
[Cloudflare KV store](https://the-guild.dev/graphql/mesh/docs/cache/cfwKv) is used as a store for
storing the cached responses.

## Deployment

1. Clone this repository
2. Install all the dependencies using `pnpm install`
3. Login to your Cloudflare account using `pnpm wrangler login`
4. Create a KV namespace using `pnpm wrangler kv:namespace create "MaverickSubgraph"` and update the
   `wrangler.toml` file with the KV namespace ID
5. Build the project using `pnpm build`
6. Deploy the project using `pnpm run deploy`
