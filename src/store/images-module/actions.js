export function saveImage ({ commit }, payload) {
  commit("saveImage", payload) // Just forward for now, but the hook is here if required
}

export function deleteImage ({ commit }, payload) {
  commit("deleteImage", payload) // Just forward for now, but the hook is here if required
}