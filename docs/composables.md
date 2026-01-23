# Composables

## useTmdbFetch
- `useTmdbFetch.js` is a wrapper for `useFetch` which injects the custom fetcher

- `useTmdbFetch(path, options)` calls `useFetch(path, { ...options, $fetch: $tmdbApi })`

## useTmdbDetails

- Fetches Tv show details and strwaming platform availability
- Structures data consistent so it is consistent
- Provides defaults
- Removes need for multiple requests, data structuring, URL building for images etc within components/ pages

The composable makes two separate requests.

The first requests is for **show details** which uses append_to_function to also return data on videos, images and credits.

The other request is for **watch providers**.

**Data Returned:**
- Name
- Overview
- Season number
- Episode number
- Trailer link
- Streaming availability (GB only for now)
  - Rental
  - Purchase
  - Subscription

**To Use:**
1. Call the composable within *<script></script>*

```js
const { details, platforms, pending, error } = useTmdbDetails({ id })
```
2. Handle loading and error states
'''js
<p v-if='pending'>Loading…</p>
<p v-else-if='error'>Something went wrong.</p>
```

3. Request details and platforms as needed within *<template></template>*
**Details**
```js
<div v-else-if='details'>
    <h1>{{ details.name }}</h1>

    <img
        v-if="details.posterUrl"
        :src="details.posterUrl"
        :alt="details.name"
    />

    <p>{{ details.overview }}</p>
</div>
```

**Platforms**
```js
<div v-else-if="platforms">
    <h2>Where to watch</h2>
    <img :src="platforms.streamLogo" :alt="platforms.streamName"/>
    <p>{{ platforms.streamName }}</p>
</div>
```

