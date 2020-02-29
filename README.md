<pre>
███▄▄▄▄    ▄██████▄      ███        ▄████████         ▄███████▄  ▄█     █▄     ▄████████
███▀▀▀██▄ ███    ███ ▀█████████▄   ███    ███        ███    ███ ███     ███   ███    ███
███   ███ ███    ███    ▀███▀▀██   ███    █▀         ███    ███ ███     ███   ███    ███
███   ███ ███    ███     ███   ▀  ▄███▄▄▄            ███    ███ ███     ███   ███    ███
███   ███ ███    ███     ███     ▀▀███▀▀▀          ▀█████████▀  ███     ███ ▀███████████
███   ███ ███    ███     ███       ███    █▄         ███        ███     ███   ███    ███
███   ███ ███    ███     ███       ███    ███        ███        ███ ▄█▄ ███   ███    ███
 ▀█   █▀   ▀██████▀     ▄████▀     ██████████       ▄████▀       ▀███▀███▀    ███    █▀
</pre>

> Note progressive web application with vue.js

## Web App Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```

 ## Local Deployment Setup
``` bash
# deploy the web application with nuxt
$ yarn build

# generate the workbox cache file sw.js
$ workbox generateSW
```

Then we have to update the index.html file so that it takes into account the workbox caching at the time of execution in a browser.

``` html
<script>
     if ('serviceWorker' in navigator) {
       window.addEventListener('load', function() {
         navigator.serviceWorker.register('/sw.js');
       });
     }
</script>
```
### Using workbox locally (optional)
``` bash
# Add workbox files to our project
$ workbox copyLibraries dist/path/to/local
```

The sw.js file must be modified to no longer execute the workbox script from a cdn but from the files previously loaded and added to the project.

``` js
/* the paths here depend on your previous
   download of the workbox libraries. */

importScripts('/path/to/local/workbox-v-*.*.*/workbox-sw.js');

workbox.setConfig({
  modulePathPrefix:  '/path/to/local/workbox-v-*.*.*/'
});
```

