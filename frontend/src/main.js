import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// # 16 ~~
Vue.prototype.nl2br = str => {
	return str.split("\n").join('<br>')
}

Vue.fetch = async (url, obj = {} => {
	return await fetch(url, obj).then(res => res.json()).then(json => {
		if (json.success) return json
		else console.log(json.err)
	})
})
// await this.fetch('/api/member') ~~~

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
