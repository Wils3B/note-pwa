if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      Notification.requestPermission().then((status) => {
        if (status === 'granted') {
          registration.showNotification(
            'Welcome to your Note App.\nJust enjoy!'
          )
        }
      })
    })
  })
}
