export function changeSearchTerm (state, newTerm) {
  state.searchTerm = newTerm
}

export function clearSearchTerm(state) {
  changeSearchTerm(state, "")
}

export function changeViewedList (state, newList) {
  state.currentList = newList
}