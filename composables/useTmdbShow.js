export const useTmdbShow = (tmdb_id) => {
  //   const id = computed(() => unref(tmdb_id));

  const { data, pending, error } = useTmdbFetch(() => `/tb/${tmdb_id}`);

  const showName = computed(() => data.value?.name ?? "Unknown");

  const posterURl = computed(() => {
    const path = data.value?.poster_path;
    return path ? `https://image.tmdb.org/t/p/w185${path}` : null;
  });

  return {
    data,
    pending,
    error,
    showName,
    posterURl,
  };
};

// can't get this to work
