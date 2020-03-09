import VueRouter from 'vue-router'
import HomePage from '../pages/index.vue'
import SearchPage from '../pages/search.vue'
import SettingsPage from '../pages/settings.vue'
import EditPage from '../pages/edit-note/_id.vue'
import DetailsPage from '../pages/note-detail/_id.vue'

export default new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/search', component: SearchPage },
    { path: '/settings', component: SettingsPage },
    { path: '/edit-note/:id', component: EditPage },
    { path: '/note_detail/:id', DetailsPage }
  ]
})
