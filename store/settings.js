export const state = () => {
  return {
    sortType: 'date'
  }
}

export const mutations = {
  changeSortType(currentState, type) {
    currentState.sortType = type
  }
}
