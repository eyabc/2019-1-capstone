import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false
// # 16 ~~
Vue.prototype.nl2br = str => {
	return str.split("\n").join('<br>')
}

Vue.prototype.$fetch = (url, obj = {}) => {
	return new Promise((resolve, reject) => {
		 fetch(url, obj).then(res => res.json()).then(json => {
			if (json.success) resolve(json)
			else reject(json.err)
		})
	})
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
