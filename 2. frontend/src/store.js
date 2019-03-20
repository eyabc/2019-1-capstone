import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		leftMenu: false,
		session: null,
		notMember: false,
	},
	mutations: {
		leftMenu(state, val) { state.leftMenu = val },
		member(state, val) { state.session = val },
		notMember(state, val) { state.notMember = val },
	},
	actions: {

	},
	getters: {
		member(state) { return state.session.member }
	}

})
