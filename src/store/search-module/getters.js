export function filtered(state, _, rootState) {
  // TODO: Add a more better fuzzy search
  const listMatches = (list, text) => {
    return list.name.toLowerCase().includes(text.toLowerCase()) || 
      list.description.toLowerCase().includes(text.toLowerCase())
  }

  if(state.searchTerm == "") {
    return rootState.main.lists
  } else {
    return rootState.main.lists.filter((l) => listMatches(l, state.searchTerm))
  }
}

export function filteredIdeas(state, _, rootState) {
  // TODO: Add a more better fuzzy search
  const ideaMatches = (idea, text) => {
    return idea.name.toLowerCase().includes(text.toLowerCase()) || 
    idea.description.toLowerCase().includes(text.toLowerCase())
  }

  if(state.currentList != null) {
    // {...x, foo: 1} returns the same value as x, except for the key foo, which is overwritten by 1
    // (the spread operator gives precedence to the right)
    return state.currentList.items.filter((l) => ideaMatches(l, state.searchTerm))
  } else {
    return []
  }
}