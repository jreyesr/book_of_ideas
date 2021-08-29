const findIndex = (state, listId) => state.lists.findIndex((l) => l.id == listId)

export function addNewList (state, { data }) {
  state.lists.push(data)
}

export function editList (state, { data }) {
  const i = findIndex(state, data.id)
  state.lists[i] = data
}

export function deleteList (state, { listId }) {
  // arr.splice(i,1) *should* remove a single element at index i
  // NOTE: arr.splice works IN PLACE, return value is the deleted elements!
  state.lists.splice(findIndex(state, listId), 1) 
}

export function addNewIdea (state, { listId, idea }) {
  const i = findIndex(state, listId)
  if (i == -1) { // Something went horribly wrong here!
    console.error(`Couldn't find list with ID ${listId}!`)
    return
  }

  state.lists[i].items.push(idea)
}

export function deleteIdea (state, { listId, ideaId }) {
  // arr.splice(i,1) *should* remove a single element at index i
  // NOTE: arr.splice works IN PLACE, return value is the deleted elements!
  const i = findIndex(state, listId)
  if (i == -1) { // Something went horribly wrong here!
    console.error(`Couldn't find list with ID ${listId}!`)
    return
  }
  const j = state.lists[i].items.findIndex((i) => i.id == ideaId) // The index of the Idea inside the .items array
  state.lists[i].items.splice(j, 1) // Splice the Idea out of the array
}

export function changeMasterListOrder (state, { newOrder }) {
  // Quick sanity ckeck: all IDs must appear on the new list
  // (i.e., no Lists must be lost when changing the order)
  const currentIds = state.lists.map(l => l.id) // An array of IDs
  if (!currentIds.every(id => newOrder.map(l => l.id).includes(id))) {
    console.error("Not all Lists accounted for when reordering!")
    console.error(currentIds)
    console.error(newOrder.map(l => l.id))
    return
  }

  state.lists = newOrder
}

export function changeListOrder (state, { listId, newOrder }) {
  const i = findIndex(state, listId)
  if (i == -1) { // Something went horribly wrong here!
    console.error(`Couldn't find list with ID ${listId}!`)
    return
  }
  
  state.lists[i].items = newOrder
}

export function toggleStar (state, {listId, itemIndex}) {
  const i = findIndex(state, listId)
  if (i == -1) { // Something went horribly wrong here!
    console.error(`Couldn't find list with ID ${listId}!`)
    return
  }

  // If idea.starred does not exist, it will default to false and be toggled to true
  // (should NOT happen, but juuuust in case)
  state.lists[i].items[itemIndex].starred = !(state.lists[i].items[itemIndex].starred ?? false);
}
