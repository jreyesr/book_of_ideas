import { findListById } from "./getters";

export function changeListOrder (state, { listId, newOrder }) {
  console.log(findListById(state)(listId))
  console.log(newOrder)
  const i = state.lists.findIndex((l) => l.id == listId)
  if (i == -1) { // Something went horribly wrong here!
    console.error(`Couldn't find list with ID ${listId}!`)
    return
  }
  
  state.lists[i].items = newOrder
  console.log(state.lists[i])
}
