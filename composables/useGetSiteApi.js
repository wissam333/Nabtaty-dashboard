const pick = (obj, ...keys) => {
  return keys.reduce((result, key) => {
    if (obj && key in obj) {
      result[key] = obj[key];
    }
    return result;
  }, {});
};

export const useGetSiteApi = () => {
  const {
    serverApiBase,
    public: { apiBase, api, cachedTime },
  } = useRuntimeConfig();
  const nuxtApp = useNuxtApp();

  // Get All Data (Get All)
  const GetAll = async (
    endpoint,
    fields = [],
    isServer = true,
    isLazy = false
  ) => {
    return useFetch(() => `${endpoint}`, {
      key: `${endpoint}`,
      baseURL: apiBase,
      server: isServer,
      lazy: isLazy,
      
      transform(input) {
        const transformed = {
          ...input,
          fetchedAt: new Date(),
        };

        if (fields.length) {
          // If the input has an items field and it's an array, apply pick to each item
          if (input.items && Array.isArray(input.items)) {
            transformed.items = input.items.map((item) =>
              pick(item, ...fields)
            );
          } else {
            // Otherwise, apply pick directly to the input
            return pick(transformed, ...fields);
          }
        }

        return transformed;
      },
      getCachedData(key) {
        return handleCachingDataTime(key);
      },
    });
  };

  // Get Data by ID (Get Details)
  const GetById = async (
    endpointWithoutId,
    fields = [],
    id,
    isServer = true,
    isLazy = false
  ) => {
    return useFetch(() => `${endpointWithoutId}${id}`, {
      key: `${endpointWithoutId}${id}`,
      baseURL: apiBase,
      server: isServer,
      lazy: isLazy,

      transform(input) {
        const transformed = {
          ...input,
          fetchedAt: new Date(),
        };

        if (fields.length) {
          return pick(transformed, ...fields);
        }

        return transformed;
      },
      getCachedData(key) {
        return handleCachingDataTime(key);
      },
    });
  };

  const handleCachingDataTime = (key) => {
    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    if (!data) return;

    // Check if the cached data is expired
    const expirationDate = new Date(data.fetchedAt);
    expirationDate.setTime(expirationDate.getTime() + cachedTime);
    const isExpired = expirationDate.getTime() < Date.now();
    if (isExpired) return;
    return data;
  };

  return {
    GetAll,
    GetById,
  };
};
