import Vue from 'vue'
import App from './App'


import request from './pages/api/ajax.js'

import store from './vuex/index.js'

Vue.config.productionTip = false

Vue.prototype.request = request
Vue.prototype.store = store
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
