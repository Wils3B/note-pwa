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

export { storeSettings, loadSettings }
