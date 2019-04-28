const mutations = {
	member (state, val) {
		localStorage.setItem('member', JSON.stringify(val))
		state.member = val
	},
	logout (commit, val) {
		commit('member', null)
		commit('leftMenu', 'notMember')
		commit('leftMenuWidth', 500)
		commit('rightMenu', null)
	},
	putMember (state, object) {
		Object.assign(state.member, object)
	},
	leftMenuWidth (state, val) {
		state.leftMenuWidth = val
	},
	leftMenu (state, val) {
		state.leftMenu = val
	},
	rightMenu (state, val) {
		state.rightMenu = val
	},
	isMember (state, val) {
		state.isMember = val
	},
	compChat (state, val) {
		state.compChat = val
	},
	notMember (state, val) {
		state.notMember = val
	},
	friend (state, val) {
		state.friend = val
	},	
	group (state, val) {
		state.group = val
	},
	spliceGroup (state, key) {
		state.group.splice(key,key+1)
	},
	tempData (state, val) {
		state.tempData = val
	},	
	putTempData (state, object) {
		Object.assign(state.tempData, object)
	},
	spliceTempData (state, key) {
		state.tempData.splice(key,key+1)
	},
	tempIdx (state, val) {
		state.tempIdx = val
	},
	tempInit (state) {
		state.tempData = null
		state.tempIdx = null
	},
	info (state, val) {
		state.info = val
	},
	activity (state, val) {
		state.activity = val
	},
	searchedEmail (state, val) {
		state.searchedEmail = val
	},
	mapSearchList (state ,val) {
		state.mapSearchList = val
	},
	groupInfo (state, val) {
		state.groupInfo = val
	}
}

export default mutations