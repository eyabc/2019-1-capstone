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

Vue.prototype.group_auth = (request, authority) => {
	if (request !== 0) {
		return [0,'요청: 그룹->멤버', '요청: 멤버->그룹'][request]
	} else {
		return ['매니저', '읽기/쓰기', '읽기', '허가 필요'][authority]
	}
}
Vue.prototype.group_permission = (permission) => {
	//{ 1 : 필요, 0 : 불필요 }
	return ['바로참여', '허가필요'][permission]
}
Vue.prototype.group_visibility = (visibility) => {
	//{ 1 : 전체공개, 2 : 친구공개 }
	return [0,'전체공개', '친구공개'][visibility]
}


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

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
