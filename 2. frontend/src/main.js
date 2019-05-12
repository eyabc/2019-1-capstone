import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import * as VueGoogleMaps from 'vue2-google-maps'
import $fetch from './middleware/fetch'
import io from 'socket.io-client'
import DateRangePicker from 'vue-mj-daterangepicker'
import '../node_modules/vue-mj-daterangepicker/dist/vue-mj-daterangepicker.css'
Vue.use(DateRangePicker)

Vue.config.productionTip = false
// # 16 ~~
Vue.prototype.nl2br = str => {
	return str.split("\n").join('<br>')
}

Vue.prototype.$fetch = $fetch

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBWjfwRSMOm94bojXMoZNjvgNM3cfU7yCY',
		libraries: 'places',
	},
})
/* #69 tag lib */
import vSelectPage from 'v-selectpage';
Vue.use(vSelectPage, {
    // server side data loader
    dataLoad: function(vue, data, params){
    	return new Promise((resolve, reject)=>{
    		axios.post(url, params).then(resp=>resolve(resp),resp=>reject(resp));
    	});
    }
});

const socket = io('localhost:3000')
store.dispatch('assignSocket', socket);
socket.emit('test', '안녕하세요1')
socket.emit('test', '안녕하세요2')
socket.emit('test', '안녕하세요3')
socket.emit('test', '안녕하세요4')

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
