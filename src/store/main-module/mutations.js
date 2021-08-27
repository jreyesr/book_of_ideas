import { v4 as uuidv4 } from 'uuid'

const findIndex = (state, listId) => state.lists.findIndex((l) => l.id == listId)

export function addNewIdea (state, { listId, idea }) {
  const i = findIndex(state, listId)
  if (i == -1) { // Something went horribly wrong here!
    console.error(`Couldn't find list with ID ${listId}!`)
    return
  }

  // Autogenerate a RFC4122 v4 UUID here, and hope it doesn't collide with anything else
  idea.id = uuidv4() 
  state.lists[i].items.push(idea)
}

export function changeListOrder (state, { listId, newOrder }) {
  const i = findIndex(state, listId)
  if (i == -1) { // Something went horribly wrong here!
    console.error(`Couldn't find list with ID ${listId}!`)
    return
  }
  
  state.lists[i].items = newOrder
}
