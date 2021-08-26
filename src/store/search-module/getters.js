import fuse, { fuseGeneral, fuseList } from "src/boot/fuse"

export function filtered(state, _, rootState) {  
  if(state.searchTerm == "") {
    return rootState.main.lists
  } else {
    return fuseGeneral.search(state.searchTerm).map((result) => result.item)
  }
}

export function filteredIdeas(state, _, rootState) {
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