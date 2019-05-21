import $fetch from '../middleware/fetch'
import eventBus from '@/eventBus'

const actions = {
	async login ({state, commit}, payload) {
		var json = await $fetch('/api/member/signin', {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(payload)
		});
		if (json.member) {
			commit('leftMenuWidth', 700)
			commit('leftMenuWidth', 700)
			commit('member', json.member)
			commit('leftMenu', 'isMember')
		} else {
			alert("아이디 혹은 비밀번호가 틀렸습니다.")
		}
	},
	async signup (context, payload) {
		await $fetch('/api/member/signup', {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(payload)
		}).then(json => {
			if(json.msg === false) {
				alert('회원가입 완료')
				context.commit("leftMenu", 'login')
			} else {
				alert('회원가입 실패')
			}
		})
	},
	async getFriends ({state, commit}, payload) {
		var json = await $fetch(`/api/friend/${state.member.idx}`, {
			method: 'get',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(payload)
		})
		commit('friend', json.data)
	},
	async getGroups ({state, commit}, payload) {
		var json = await $fetch(`/api/group/${state.member.idx}/${payload.request}`, {
			method: 'get',
			headers: { 'Content-Type': 'application/json'},
		})
		commit('group', json.data)
	},
	async getFrendInfo ({state, commit}) {
		var json = await $fetch(`/api/member/${state.tempData.idx}`)
		commit('tempData', json.data)
	},
	async setFavorite ({state, commit}, payload) {
		var json = await $fetch(`/api/friend/favorite/${state.member.idx}/${state.tempData.idx}`, {
			method: 'put',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(payload)
		})
		commit('putTempData', payload)
	},
	async putMember ({state, commit}, payload) {
		var json = await $fetch(`/api/member/${state.member.idx}`, {
			method: 'put',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(payload)
		})
		commit('putMember', payload)
		localStorage.setItem('member', JSON.stringify(state.member))
		alert('정보 수정이 완료되었습니다.')
	}, 
	async insertGroup ({state, commit}, payload) {
		var json = await $fetch(`/api/group`, {
			method: 'POST',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(payload)
		})
		state.group.splice(state.group.length - 1, 0, payload.data)
		alert('그룹 생성이 완료되었습니다.')
	},
	async deleteFriend ({state, commit, dispatch}, payload) {
		var json = await $fetch(`/api/friend/${state.member.idx}/${payload.idx}`, {
			method: 'delete',
			headers: {'Content-Type':'application/json'},
		})
		const index = state.tempIdx.index	
		state.friend.splice(index,index+1)
		dispatch('getFriends')
	},
	async getMemberByEmail ({state, commit}, payload) {
		const json = await $fetch(`/api/member-search?email=${payload}`)
		commit('searchedEmail', json.memberInfo[0])
		console.log(state.searchedEmail)
		if (json.memberInfo[0]) {
			const json2 = await $fetch(`/api/friend/${state.member.idx}/${json.memberInfo[0].idx}`, {
				method: 'get',
				headers: {'Content-Type':'application/json'},
			})
			console.log(json2)
			commit('tempData', json2)
		}
		state.isMember !== 'search' ? commit('isMember', 'search') : ''
	},
	/* #158 insert member-friend request active relation*/
	async createFriendRelation ({state, commit, dispatch}, payload) {
		await $fetch(`/api/friend/${payload.from}/${payload.to}`, {
			method: 'POST',
			headers: {'Content-Type':'application/json'},
		})
	},
	/* #158 cancel member-friend request active relation */
	async refuseFriend (context, payload) {
		console.log(payload)
		const json = await $fetch(`/api/friend-cancel/${payload.from}/${payload.to}`, {
			method: 'delete',
			headers: {'Content-Type':'application/json'},
		})


	},
	/* #158 get friend-relation */
	async getFriendRelation ({state, commit}, payload) {
		console.log("action: getFriendRelation")
		const json = await $fetch(`/api/friend/${state.member.idx}/${payload.idx}`, {
			method: 'get',
			headers: {'Content-Type':'application/json'},
		})
		commit('tempData', json)
	},
	/* #162 get Friend Requested - received */
	async getFriendReceived ({state, commit}, payload) {
		const json = await $fetch(`/api/friend-received/${state.member.idx}`, {
			method: 'get',
			headers: {'Content-Type':'application/json'},
		})
		commit('tempData', json.data)
	},
	/* #162 get Friend Requested - send */
	async getFriendSend ({state, commit}, payload) {
		const json = await $fetch(`/api/friend-send/${state.member.idx}`, {
			method: 'get',
			headers: {'Content-Type':'application/json'},
		})
		commit('tempData', json.data)
	},
	/* change group Request */
	async putRequest (context, payload) {
		const json = await $fetch(`/api/group-request`, {
			method: 'put',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(payload)
		})
	},
	/* delete group-participant */
	async deleteGroupParticipant (context, payload) {
		const json = await $fetch(`/api/group-participant`, {
			method: 'delete',
			headers: { 'Content-Type':'application/json'},
			body: JSON.stringify(payload)
		})
	},
	/* #174 map group search */
	async getSearchedGroup ({state, commit}, payload) {
		const json = await $fetch(payload.url)
		commit('mapSearchList', json.data)
	},
	/* #176 get group infomation */
	async getGroupInfo ({state, commit, dispatch}, payload) {
		const json = await $fetch(`/api/group-info/${payload.cgidx}`)
		commit('groupInfo', json.data[0])
	},
	/* #179 relation check between group and member */
	async getGroupMemberRelation ({state, commit}, payload) {
		const json = await $fetch(`/api/group-participant/relation/${state.member.idx}/${state.groupInfo.idx}`)
		commit(payload.commit, json.data[0])
	},
	/* #179 insert participant */
	async createdParticipant({state, commit, dispatch}, payload) {
		const json = await $fetch(`/api/group-participant/${state.member.idx}/${state.groupInfo.idx}`, {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(payload)
		})
		console.log(payload)
		dispatch('getGroupMemberRelation', {commit: 'getGroupMemberRelation'})
	},
	assignSocket: (context, payload) => {
		context.commit('ASSIGN_SOCKET', payload);
	},
	/* chat */
	async createChat ({state, commit}, payload) {
		const json = await $fetch(`/api/chat/${state.member.idx}/${state.groupInfo.idx}`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(payload)
		})
	},
	async readChat ({state, commit}, payload) {
		const json = await $fetch(`/api/chat/${state.groupInfo.idx}/${payload.category}`, {
			method: 'get',
		})
		commit(payload.commit, json.data)
	},

	/* category */
	async readCategory ({state, commit}, payload) {
		const json = await $fetch(`/api/category/${state.groupInfo.idx}`, {
			method: 'get'
		})
		commit(payload.commit, json.data)	
	},
	async createCategory ({state, commit}, payload) {
		const json = await $fetch(`/api/category/${state.groupInfo.idx}`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(payload)
		})
		commit('category_insertId', json.idx)
	},
	async updateCategory ({state, commit}, payload) {
		const json = await $fetch(`/api/category/${state.group.category_key.idx}`, {
			method: 'put',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(payload)
		})
	},	
	async deleteCategory ({state, commit}, payload) {
		const json = await $fetch(`/api/category/${state.group.category_key.idx}`, {
			method: 'delete',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(payload)
		})
	},
	async readParticipant ({state, commit}, payload) {
		const json = await $fetch(`/api/group-participant/${state.groupInfo.idx}`, {
			method: 'get'
		})
		commit('participant', json.data)
	},
	async updateGroupInfo ({state, commit}, payload) {
		const json = await $fetch(`/api/group-info/${state.groupInfo.idx}`, {
			method: 'put',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(payload)
		})
	},	
	async updateParticipantAuth ({state, commit}, payload) {
		const json = await $fetch(`/api/participant-auth/${payload.midx}/${state.groupInfo.idx}`, {
			method: 'put',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(payload)
		})
	},	
	async updateParticipantReqeust ({state, commit}, payload) {
		const json = await $fetch(`/api/participant-request/${payload.midx}/${state.groupInfo.idx}`, {
			method: 'put',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(payload)
		})
	},
	
}

export default actions