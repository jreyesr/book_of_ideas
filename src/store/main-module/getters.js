export function findListById (state) {
  return (id) => state.lists.find((x) => x.id == id)
}