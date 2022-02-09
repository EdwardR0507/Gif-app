export const getTrendingGifs = async () => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  const urlFetch = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;
  const resp = await fetch(urlFetch);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
