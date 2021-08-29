// _1, _2 are unused
export function getImageSrc(state, _1, _2, rootGetters) {
  return (ideaId) => {
    if (state.images[ideaId]) {
      return URL.createObjectURL(state.images[ideaId])
    }
    else {
      return rootGetters["main/findIdeayId"](ideaId).picUrl
    }
  }
}