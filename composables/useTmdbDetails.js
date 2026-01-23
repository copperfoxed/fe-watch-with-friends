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
    const p = platformsResponse.data.value
    if (!p || !p.results || !p.results.GB ) return null

    const { flatrate = [], rent = [], buy = [] } = p.results.GB

    const stream = flatrate[0] || null
    const rental = rent [0] || null
    const purchase = buy [0] || null

    return {
      streamLogo: stream ? `https://image.tmdb.org/t/p/w92${stream.logo_path}` : null,
      streamName: stream?.provider_name || null,
      rentLogo: rental ? `https://image.tmdb.org/t/p/w92${rental.logo_path}` : null,
      rentName: rental?.provider_name || null,
      buyLogo: purchase ? `https://image.tmdb.org/t/p/w92${purchase.logo_path}` : null,
      buyName: purchase?.provider_name || null,
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