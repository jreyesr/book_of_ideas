export function saveImage (state, { newId, image }) {
  state.images[newId] = image
}

export function deleteImage (state, { ideaId }) {
  // Deleting a non-existing property is OK and does nothing :)
  // so it's OK to just charge forward and delete state.images[ideaId]
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
  delete state.images[ideaId]
}