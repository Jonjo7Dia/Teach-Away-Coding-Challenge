import { useSelector } from "react-redux";

const Gallery = async () => {
  const filter = useSelector((state) => state.filter);
  const headers = { "Authorization": "Client-ID 7db314957da0eed" };

  await fetch(`https://api.imgur.com/3/gallery/${filter.section}/${filter.sort}/${filter.window}/${filter.page}/?showViral=${filter.showViral}`, {
    method: "GET",
    headers,
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export default Gallery;
