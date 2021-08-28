import { v4 as uuidv4 } from 'uuid'

const findIndex = (state, listId) => state.lists.findIndex((l) => l.id == listId)

export function addNewList (state, { data }) {
  // Autogenerate a RFC4122 v4 UUID here, and hope it doesn't collide with anything else
  data.id = uuidv4()
  data.items = []
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

  // Autogenerate a RFC4122 v4 UUID here, and hope it doesn't collide with anything else
  idea.id = uuidv4()
  idea.starred = false
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
