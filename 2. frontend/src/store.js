import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		leftMenu: false,
		leftMenuWidth: 500,
		notMember: false,
		rightMenu: false,
		isMember: 'friends',
		member: JSON.parse(localStorage.getItem('member')) || null,
		title: "CEO",
		
	},
	mutations: {
		leftMenu(state, val) { state.leftMenu = val },
		rightMenu(state, val) { state.rightMenu = val },
		isMember(state, val) { state.isMember = val },
		member(state, val) {
			localStorage.setItem('member', JSON.stringify(val))
			state.member = val
		},
		notMember(state, val) { state.notMember = val },
		setLeftMenuWidth(state, val) {state.leftMenuWidth = val },
	},
	actions: {

	},
	getters: {
		member(state) { return state.member },
		title(state) { return state.title},
		isMember(state) {return state.isMember}
	}

})
