export default defineNuxtPlugin(() => {
    const tmdbApi = $fetch.create ({
        baseURL:"/api/tmdb"
    })
    return {
        provide: { tmdbApi }
    }
})