export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    tmdbApiToken: process.env.TMDB_API_TOKEN,
    tmdbApiKey: process.env.TMDB_API_KEY,
    public: {
      tmdbBaseUrl: "https://api.themoviedb.org/3"
    }
  },

  modules: ['@nuxt/ui']
});


