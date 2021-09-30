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
Note progressive web application with vue.js

<p align="center">
  <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank"><img src="https://img.shields.io/static/v1?label=Licence&message=GPL-3.0&color=blue" alt="Licence" /></a>
  <img src="https://github.com/Wils3B/note-pwa/actions/workflows/firebase-hosting-merge.yml/badge.svg" alt="Build" />
  [![Build Status][ci-image]][ci-url]
  [![Coverage Status][coveralls-image]][coveralls-url]
</p>

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

 ## Note for local development
 @nuxtjs/pwa `workbox.enabled` option is activate, this can cause some issue when developing, if pwa behavior will not be expect, please deactivate this option before start your dev server
 @see https://pwa.nuxtjs.org/workbox#enabled

