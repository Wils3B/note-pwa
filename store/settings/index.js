import { loadSettings, storeSettings } from './functions'

export const state = () => {
  const loadedSettings = loadSettings()
  return {
    selecteds: {
      sortType: loadedSettings.sortType || 'date',
      defaultColor: loadedSettings.defaultColor || 'white',
      appFont: loadedSettings.appFont || 'Amita',
      autosave: loadedSettings.autosave || '2min',
    },
    groups: {
      sortTypes: ['date', 'color'],
      fonts: ['Kalam', 'Amita', 'Roboto'],
      autosave: ['off', '10s', '20s', '30s', '2min', '5min'],
    },
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
  },
  changeAutosave(currentState, autosave) {
    currentState.selecteds.autosave = autosave
    storeSettings(currentState.selecteds)
  },
}

export const getters = {
  autosaveInMillis(currentState) {
    const setting = currentState.selecteds.autosave
    if (/^\d+s$/.test(setting)) {
      return 1000 * Number(setting.substring(0, setting.length - 1))
    } else if (/^\d+min$/.test(setting)) {
      return 1000 * 60 * Number(setting.substring(0, setting.length - 3))
    }
    return 0
  },
}
