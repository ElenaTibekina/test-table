// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (table)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('table-component', require('./components/Table.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})
