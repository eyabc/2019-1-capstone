import Vue from 'vue'
import Vuex from 'vuex'
import $fetch from './middleware/fetch'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		member: JSON.parse(localStorage.getItem('member')) || null,
		title: "CEO",
		
		leftMenu: false,
		leftMenuWidth: 500,
		
		rightMenu: false,

		notMember: false,
		
		isMember: 'friends',
		friend: [],
		group: [],
		tempData: null,
		tempData2: []
		
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
			state.friend = json.friend
		},
		async getFrendInfo (state) {
			const data  = state.tempData
			var json = await $fetch(`/api/member/${data}`)
			state.tempData = json.data
		},
		async getGroups (state) {
			const data  = state.member.idx
			var json = await $fetch(`/api/group/${data}`)
			state.group = json.group
		},


	},
	actions: {

	},
	getters: {
		member(state) { return state.member },
		title(state) { return state.title},
		isMember(state) {return state.isMember},
		friend(state) { return state.friend},
		tempData(state) {return state.tempData}

	}

})
