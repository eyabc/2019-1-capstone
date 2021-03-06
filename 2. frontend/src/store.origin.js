import Vue from 'vue'
import Vuex from 'vuex'
import $fetch from './middleware/fetch'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		member: JSON.parse(localStorage.getItem('member')) || null,
		title: "CEO",
		leftMenuWidth: 500,
		leftMenu: false,
		notMember: false,
		isMember: 'relation',
		compChat: false,
		info: false,
		friend: [],
		group: [],
		tempData: {},
		tempIdx: []
		
	},
	mutations: {
		member(state, val) {
			localStorage.setItem('member', JSON.stringify(val))
			state.member = val
		},
		leftMenuWidth(state, val) { state.leftMenuWidth = val },
		leftMenu(state, val) { state.leftMenu = val },
		isMember(state, val) { state.isMember = val },
		compChat(state, val) { state.compChat = val },
		notMember(state, val) { state.notMember = val },
		setLeftMenuWidth(state, val) {state.leftMenuWidth = val },
		friend(state, val) { state.friend = val },
		tempData(state, val) { state.tempData = val },		
		tempIdx(state, val) { state.tempIdx = val },
		tempInit(state) {
			state.tempData = null
			state.tempIdx = null
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
		async getGroups (state) {
			const data  = state.member.idx
			var json = await $fetch(`/api/group/${data}`)
			state.group = json.data
		},
		async setFavorite (state, val) {
			const data = val
			var json = await $fetch(`/api/friend/favorite/${state.member.idx}/${state.tempData.idx}`, {
				method: 'put',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify(data)
			})
			state.tempData.favorite = val.favorite
		},
		async putMember (state, val) {
			const data = val
			var json = await $fetch(`/api/member/${state.member.idx}`, {
				method: 'put',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify(data)
			})
			Object.assign(state.member, data)
			localStorage.setItem('member', JSON.stringify(state.member))
			alert('정보 수정이 완료되었습니다.')
		},

		async insertGroup (state, data) {
			var json = await $fetch(`/api/group`, {
				method: 'POST',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify(data)
			})
			
			state.groups.splice(state.groups.length - 1, 0, data.data)
			alert('그룹 생성이 완료되었습니다.')
			state.isMember = 'chat'
			state.compChat = 'groupIn'
		},
		async OneToOne (state, val) {
			
		},
		async deleteFriend (state) {
			var json = await $fetch(`/api/friend/${state.member.idx}/${state.tempData.idx}`, {
				method: 'delete',
				headers: {'Content-Type':'application/json'},
			})
			const index = state.tempIdx.index
			state.friend.splice(index,index+1)
			this.tempInit
		},



	},
	actions: {
		async login (context, payload) {
			var json = await $fetch('/api/member/signin', {
				method: 'post',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify(payload)
			});
			if (json.member) {
				context.commit('leftMenuWidth', 700)
				context.commit('member', json.member)
				context.commit('leftMenu', 'isMember')
			} else {
				alert("아이디 혹은 비밀번호가 틀렸습니다.")
			}
		}
	},
	getters: {
		member(state) { return state.member },
		title(state) { return state.title},
		isMember(state) {return state.isMember},
		friend(state) { return state.friend},
		tempData(state) {return state.tempData}

	}

})
