export const getGifs = async (category) => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  const urlFetch = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&api_key=${apiKey}&limit=10`;
  const resp = await fetch(urlFetch);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    const { id, title, images } = img;
    const { url } = images.downsized_medium;
    return { id, title, url };
  });

  return gifs;
};
