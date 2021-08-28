const linesToArray = (text) => text.split("\n")

// This one comes from https://stackoverflow.com/a/43467144
const isValidUrl = (text) => {
  let url;
  try {
    url = new URL(text); // URL constructor throws on malformed strings
  } catch (_) {
    return false;  
  }

  // javascript:void(0) is technically a valid URL, so we also need to check the schema
  return url.protocol === "http:" || url.protocol === "https:";
}

export {
  linesToArray,
  isValidUrl
}