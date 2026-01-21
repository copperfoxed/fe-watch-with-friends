export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    const query = getQuery(event)
    const path = getRouterParam(event, "path") || ""
    const tmdbPath = `/${path}`

    return $fetch(tmdbPath, {
        baseURL: config.public.tmdbBaseUrl,
        query: {
            ...query,
            api_key: config.tmdbApiKey
        },
        headers: {
            Authorization: `Bearer ${config.tmdbApiToken}`
        }
    })
    .catch ((err) => {
        return Promise.reject (
            createError ({
                statusCode: err?.response?.status || 500,
                statusMessage:
                err?.data?.status_message ||
                err?.message ||
                "Request failed"
            })
        )
    })
})