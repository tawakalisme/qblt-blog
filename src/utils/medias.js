export function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith("/")) {
    // Prepend Strapi address
    return `${"https://qblt-strapi.herokuapp.com" ||
      "http://localhost:1337"}${url}`;
  }
  // Otherwise return full URL
  return url;
}
