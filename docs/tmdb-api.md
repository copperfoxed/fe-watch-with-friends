# TMDB API

## Implementation
### Runtime Config
- Credentials (Access Token and API Key) are loaded using `runtimeConfig` in *nuxt.config.js*
- These credentials are not (and should not be) exposed to the client

### Catch All Proxy Route
TMDB requests pass through a Nuxt server route:
**`server/api/tmdb/[...path].js`**

- Injects API Key and Access Token on the server side so client never sees these
- Singular proxy route can access any TMDB endpoint

### Custom Fetcher
Points to the proxy route:
`plugins/tmdb.js`

It creates a base URL  
This is our server route rather than from TMDB, which keeps key and token safe

### useTmdbFetch Composable
`composables/useTmdbFetch.js` is a wrapper for `useFetch` which injects the custom fetcher:

`useTmdbFetch(path, options)` calls `useFetch(path, { ...options, $fetch: $tmdbApi })`

This keeps components clean and consistent.