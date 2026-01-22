export function useTmdbFetch(path, options = {}) {
  const { $tmdbApi } = useNuxtApp();

  return useFetch(path, {
    ...options,
    $fetch: $tmdbApi,
  });
}
