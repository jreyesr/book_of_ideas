import fuse, { fuseGeneral, fuseList } from "src/boot/fuse"

export function searchActive(state) {
  return state.searchTerm !== ""
}

export function filtered(state, getters) {  
  if(getters.searchActive) {
    return fuseGeneral.search(state.searchTerm).map((result) => result.item)
  } else {
    return rootState.main.lists
  }
}

export function filteredIdeas(state) {
  if(state.currentList != null) { 
    if(state.searchTerm == "") { // Fuse.js returns an empty list if search term is empty, which is NOT what we need
      return state.currentList.items
    } else { // Actually call the search function and extract results
      return fuseList.search(state.searchTerm).map((result) => result.item)
    }
  } else { // Not in a List detail view
    return []
  }
}