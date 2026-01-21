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

https://developer.themoviedb.org/docs/getting-started

### Environment Variables
This project uses TMDB API credentials.
These are stored in enironment variables.

Template can be found in *.env.example* with required variables.

```bash
cp .env.example .env
```

Fill in your own keys.

***.env* is gitignored and must not be committed**

### Runtime Config
- Credentials (Access Token and API Key) are loaded using `runtimeConfig` in *nuxt.config.js*
- These credentials are not (and should not be) exposed to the client

### Catch All Route
TMDB requests pass through a Nuxt server route:
**`server/api/tmdb/[...path].js`**

This allows calls to any endpoint for */api/api.themoviedb.org/3*

The proxy:
- Injects API Key and Access Token on the server side so tokens never reach client side
- Returns response from TMDB to client
- Passes request with pith and query paramaters to TMDB

### Custom Fetcher
Points to the proxy route:
`plugins/tmdb.js`

It creates a base URL  
This is our server route rather than from TMDB, which keeps key and token safe