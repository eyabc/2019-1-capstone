import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

Vue.config.productionTip = false
// # 16 ~~
Vue.prototype.nl2br = str => {
	return str.split("\n").join('<br>')
}

Vue.prototype.$fetch = (url, obj = {}) => {
	return new Promise((resolve, reject) => {
		fetch(url, obj)
		.then(res => res.json())
		.then(json => {
			if (json.success) resolve(json)
			else console.log(json.err)
		})
	})
}

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBWjfwRSMOm94bojXMoZNjvgNM3cfU7yCY',
		libraries: 'places',
	},
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
