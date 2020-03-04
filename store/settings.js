export const state = () => {
  return {
    selecteds: {
      sortType: 'date'
    },
    groups: {
      sortTypes: ['date', 'color']
    }
  }
}

export const mutations = {
  changeSortType(currentState, type) {
    currentState.selecteds.sortType = type
  }
}
