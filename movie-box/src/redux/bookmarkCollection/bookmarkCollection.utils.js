export const addToBookmark = (bookmark, movie) => {
  let existingItem = bookmark.find(item => item.imdbID === movie.imdbID);
  if (existingItem) {
    return bookmark;
  } else {
    return [...bookmark, movie];
  }
};
