export function useTmdbDetails ({id}) {
    const detailsResponse = useTmdbFetch (`/tv/${id}`, {
        query: { append_to_response: 'videos,images,credits' }
    })

    const platformResponse = useTmdbFetch (`/tv/${id}/watch/providers`)

    const pending = computed(() =>
        detailsResponse.pending.value || platformResponse.pending.value
    )

    const error = computed(() =>
        detailsResponse.error.value || platformResponse.error.value
    )

    return {
      detailsResponse,
      providersResponse,
      pending,
      error,
    }
}