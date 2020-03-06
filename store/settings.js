export const state = () => {
  const loadedSettings = loadSettings()
  return {
    selecteds: {
      sortType: loadedSettings.sortType || 'date',
      defaultColor: loadSettings.defaultColor || 'white'
    },
    groups: {
      sortTypes: ['date', 'color']
    }
  }
}

export const mutations = {
  changeSortType(currentState, type) {
    currentState.selecteds.sortType = type
    storeSettings(currentState.selecteds)
  },
  changeDefaultColor(currentState, color) {
    currentState.selecteds.defaultColor = color
    storeSettings(currentState.selecteds)
  }
}

function storeSettings(settings) {
  localStorage.setItem('settings', JSON.stringify(settings))
}

function loadSettings() {
  const settingsJSON = localStorage.getItem('settings')
  let settingsObj = {}
  try {
    settingsObj = JSON.parse(settingsJSON)
  } catch (e) {}
  return settingsObj || {}
}
