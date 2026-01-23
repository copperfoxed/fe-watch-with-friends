// composables/useTmdbDetails.js
import { computed } from "vue"

export function useTmdbDetails({ id }) {
  const detailsResponse = useTmdbFetch(`/tv/${id}`, {
    query: { append_to_response: "videos,images,credits" },
  })

  const platformsResponse = useTmdbFetch(`/tv/${id}/watch/providers`)

  const details = computed(() => {
    const d = detailsResponse.data.value
    if (!d) return null

    const trailer = d.videos?.results?.find(
      (v) => v.type === "Trailer" && v.site === "YouTube"
    )

    return {
      posterUrl: d.poster_path ? `https://image.tmdb.org/t/p/w342${d.poster_path}` : null,
      name: d.name,
      overview: d.overview,
      numSeasons: d.number_of_seasons,
      numEpisodes: d.number_of_episodes,
      trailerUrl: trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null,
    }
  })

    const platforms = computed(() => {
    const gb = platformsResponse.data.value?.results?.GB

    if (!gb) {
      return {
        streaming: [],
        rent: [],
        buy: [],
        hasAny: false,
      }
    }

    const streaming = gb.flatrate ?? []
    const rent = gb.rent ?? []
    const buy = gb.buy ?? []

    return {
      streaming,
      rent,
      buy,
      hasAny:
        streaming.length > 0 || rent.length > 0 || buy.length > 0,
    }
  })

  const pending = computed(
    () => detailsResponse.pending.value || platformsResponse.pending.value
  )

  const error = computed(
    () => detailsResponse.error.value || platformsResponse.error.value
  )

  return {
    details,
    platforms,
    pending,
    error,
  }
}