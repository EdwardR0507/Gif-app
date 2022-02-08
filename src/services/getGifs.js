export const getGifs = async () => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  return data;
};
