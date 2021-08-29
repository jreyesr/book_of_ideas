export function findListById (state) {
  return (id) => state.lists.find(l => l.id == id)
}

export function findIdeaById (state) {
  // lists
  //  .map()  -> extracts the `items` array
  //  .flat() -> flattens the two-level array
  //  .find() -> gets the Idea with the desired `id`
  return (id) => state.lists.map(l => l.items).flat().find(i => i.id == id)
}