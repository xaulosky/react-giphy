export const getGifs = async (categoria) => {
  const apiKey = "wfu303uBB34bk4VkughzIg8ldbIQffHG";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(
    categoria
  )}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
