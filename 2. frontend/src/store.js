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
		tempData: {},
		tempIdx: []
		
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
		tempData(state, val) {
			state.tempData = val
		},		
		tempIdx(state, val) {
			state.tempIdx = val
		},
		tempInit(state) {
			state.tempData = null
			staet.tempIdx = null
		},
		async getFriends (state) {
			const data  = state.member.idx
			var json = await $fetch(`/api/friend/${data}`)
			state.friend = json.data
		},
		async getFrendInfo (state) {
			const data  = state.tempData.idx
			var json = await $fetch(`/api/member/${data}`)
			state.tempData = json.data
		},
		async deleteFriend (state) {
			var json = await $fetch(`/api/friend/${state.member.idx}/${state.tempData.idx}`, {
				method: 'delete',
				headers: {'Content-Type':'application/json'},
			})
			const index = state.tempIdx.index
			state.friend.splice(index,index+1)
			this.tempInit() 
		},
		async getGroups (state) {
			const data  = state.member.idx
			var json = await $fetch(`/api/group/${data}`)
			state.group = json.data
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
