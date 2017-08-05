// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SlideShow from './components/Slideshow'
import Slide from './components/Slide'
import VideoContent from './components/VideoContent'
import ImageContent from './components/ImageContent'
import CustomContent from './components/CustomContent'
import GalleryContent from './components/GalleryContent'
import GalleryItem from './components/GalleryItem'
import RSSContent from './components/RSSContent'
import RSSItem from './components/RSSItem'
import VideoElement from './components/VideoElement'
require('./assets/css/frontend-styles.css')
require('./assets/css/variables.css')

import { store } from './store/store'

Vue.component('tv-slideshow', SlideShow)
Vue.component('tv-slide', Slide)
Vue.component('video-content', VideoContent)
Vue.component('custom-content', CustomContent)
Vue.component('image-content', ImageContent)
Vue.component('gallery-content', GalleryContent)
Vue.component('gallery-item', GalleryItem)
Vue.component('rss-content', RSSContent)
Vue.component('rss-item', RSSItem)
Vue.component('video-element', VideoElement)
Vue.component('App', App)

Vue.config.productionTip = false

export const bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>'
})



