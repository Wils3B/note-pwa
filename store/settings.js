export const state = () => {
  const loadedSettings = loadSettings()
  return {
    selecteds: {
      sortType: loadedSettings.sortType || 'date'
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
