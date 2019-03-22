import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		leftMenu: false,
		notMember: false,
		rightMenu: false,
		member: JSON.parse(localStorage.getItem('member')) || null
	},
	mutations: {
		leftMenu(state, val) { state.leftMenu = val },
		rightMenu(state, val) { state.rightMenu = val },
		member(state, val) {
			localStorage.setItem('member', JSON.stringify(val))
			state.member = val
		},
		notMember(state, val) { state.notMember = val }
	},
	actions: {

	},
	getters: {
		member(state) { return state.member }
	}

})
