
const headers = { Authorization: "Client-ID 7db314957da0eed" };

async function httpGetMedia(section, sort, window, page, showViral) {
  const url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page}/?showViral=${showViral}`;

  const response = await fetch(`${url}`, {
    method: "GET",
    headers,
  });
  const fetchedMedia = await response.json();
  return fetchedMedia;
}

export { httpGetMedia };
