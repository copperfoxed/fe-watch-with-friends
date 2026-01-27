export function useTmdbSearch({ q }) {
    const tvResponse = useTmdbFetch('/search/tv', {
        query: { 
            query: q, 
            language: 'en-GB' 
        }
    })

    const tvShows = computed(() => {
        const results = tvResponse.data.value?.results
        return results ? results.map(d => ({
            id: d.id,
            name: d.name,
            posterUrl: d.poster_path ? `https://image.tmdb.org/t/p/w342${d.poster_path}` : null,
        })) 
            : []

    })
    return {
        tvShows,
        pending: tvResponse.pending,
        error: tvResponse.error
    }
}
