import Vue from 'vue'
import Vuex from 'vuex'
import $fetch from './middleware/fetch'

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
		friend: [],
		group: [],
		
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
		friend(state, val) {
			state.friend = val
		},
		async getFriends (state) {
			const data  = state.member.idx
			var json = await $fetch(`/api/friend/${data}`)
			if(json.success) {
				state.friend = json.friend
			} else {
				console.log("fails get friends")
			}
		},
		async getGroups (state) {
			const data  = state.member.idx
			var json = await $fetch(`/api/group/${data}`)
			if(json.success) {
				state.group = json.group
			} else {
				console.log("fails get groups")
			}
		},

	},
	actions: {

	},
	getters: {
		member(state) { return state.member },
		title(state) { return state.title},
		isMember(state) {return state.isMember},
		friend(state) { return state.friend}

	}

})
