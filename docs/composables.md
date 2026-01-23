# Composables

## useTmdbFetch
- `useTmdbFetch.js` is a wrapper for `useFetch` which injects the custom fetcher

- `useTmdbFetch(path, options)` calls `useFetch(path, { ...options, $fetch: $tmdbApi })`
