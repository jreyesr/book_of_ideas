import { fuseList } from "src/boot/fuse"

export function changeSearchTerm (state, newTerm) {
  state.searchTerm = newTerm
}

export function clearSearchTerm(state) {
  changeSearchTerm(state, "")
}

export function changeViewedList (state, newList) {
  fuseList.setCollection(newList?.items ?? [])
  state.currentList = newList
}