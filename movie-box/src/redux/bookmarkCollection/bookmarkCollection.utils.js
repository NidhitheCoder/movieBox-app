export const addToBookmark = (bookmark, movie) => {
  let existingItem = bookmark.find(item => item.imdbID === movie.imdbID);
  if (existingItem) {
    return bookmark;
  } else {
    return [...bookmark, movie];
  }
};

export const removeFromBookmark = (bookmark,movieId ) => {
  return bookmark.filter(movie=> movie.imdbID !== movieId)
}
