# fe-watch-with-friends

The front end of the "Watch with frends" app, setup for vue.js with the NUXT framework 

## setup

### Step 1

```bash
git clone https://github.com/copperfoxed/fe-watch-with-friends.git
cd fe-watch-with-friends
code .

npm install
npm run dev
```

### Step 2 

Check if you are on the correct branch by using the code

```bash
git branch
```

if not, use

```bash
git checkout "branch-name"
```

without the Quotation marks, if the branch doesnt exist, to create a new branch for the specified piece you're working on, use

```bash
git checkout -b "branch-name"
```

this will create a new branch for use

### Step 3

Make sure you are on the correct branch, and use 

```bash
git add .
git commit -m "changes info"
git push origin "branch-name"
```

if you attempt to push to main, your push will denied.

## TMDB API

This project uses The Movie Database (TMDB) API.

https://developer.themoviedb.org/docs/getting-started

### Environment Variables
The API credentials are stored in enironment variables.

A template can be found in `.env.example` with the required variables.

```bash
cp .env.example .env
```

Fill in your own keys.

***.env* is gitignored and must not be committed**

TMDB Integration (Overview)

TMDB requests are handled via Nuxt server routes so API credentials are not exposed to the client.

Client components fetch TMDB data using a custom useTmdbFetch composable.

### Example Usages
- Popular films
```js
const { data, pending, error } = useTmdbFetch("/movie/popular")
```

- Series details **(using append_to_response)**
```js
const { data, pending, error } = useTmdbFetch("/tv/1399", {
  query: { append_to_response: "videos,credits,images" }
})
```

- Film search **(using query)**
```js
const { data, pending, error } = useTmdbFetch("/search/movie", {
  query: { query: "Vampire", page: 2 }
})
```