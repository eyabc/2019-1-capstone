import $fetch from '../middleware/fetch'

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
		var json = await $fetch(`/api/friend/${state.member.idx}`)
		commit('friend', json.data)
	},
	async getGroups ({state, commit}, payload) {
		var json = await $fetch(`/api/group/${state.member.idx}`)
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
		commit('activity', 'group')
	},
	async deleteFriend ({state, commit}) {
		var json = await $fetch(`/api/friend/${state.member.idx}/${state.tempData.idx}`, {
			method: 'delete',
			headers: {'Content-Type':'application/json'},
		})
		const index = state.tempIdx.index
		state.friend.splice(index,index+1)
		commit('tempInit')
		commit('isMember', 'relation')
	},
}

export default actions