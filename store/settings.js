export const state = () => {
  const loadedSettings = loadSettings()
  return {
    selecteds: {
      sortType: loadedSettings.sortType || 'date',
      defaultColor: loadedSettings.defaultColor || 'white',
      appFont: loadedSettings.appFont || 'Amita'
    },
    groups: {
      sortTypes: ['date', 'color'],
      fonts: ['Kalam', 'Amita', 'Roboto']
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
  },
  changeAppFont(currentState, font) {
    currentState.selecteds.appFont = font
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
