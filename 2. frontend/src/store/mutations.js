const mutations = {
	member (state, val) {
		localStorage.setItem('member', JSON.stringify(val))
		state.member = val
	},
	logout (state, val) {
		state.member = null
		localStorage.setItem('member', null)
		state.leftMenu = 'notMember'
		state.leftMenuWidth = 500
		state.rightMenu = null
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
	groups (state, val) {
		state.groups = val
	},
	spliceGroup (state, key) {
		state.groups.splice(key,1)
	},
	tempData (state, val) {
		state.tempData = val
	},	
	putTempData (state, object) {
		Object.assign(state.tempData, object)
	},
	spliceTempData (state, key) {
		state.tempData.splice(key,1)
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
	},	
	updateGroupInfo (state, object) {
		Object.assign(state.groupInfo, object)
	},
	getGroupMemberRelation (state, val) {
		state.getGroupMemberRelation = val
	},
	ASSIGN_SOCKET: (state, payload) => {
		state.socket = payload;
	},
	groupComp (state, val) {
		state.groupComp = val
	},
	/* state: group json */
	myGroupRelation (state, val) {
		state.group.myRelation = val
	},
	chat_content (state, val) {
		state.group.chat_content = val
	}, 
	category_list (state, val) {
		state.group.category_list = val
	},
	createCategory_list (state, val) {
		state.group.category_list.push(val)
	},	
	updateCategory_list (state, val, key) {
		state.group.category_list[key] = val
	},
	category_insertId (state, val) {
		state.group.category_insertId = val
	},
	spliceCategory_list (state, key) {
		state.group.category_list.splice(key,1)
	},
	category_key (state, val) {
		state.group.category_key = val
	},
	participant (state, val) {
		state.participant = val
	},
	spliceParticipant (state, key) {
		state.participant.splice(key, 1)
	},
	createParticipant (state, val) {
		state.participant.push(val)
	},	
	setRoom (state, val) {
		state.room = val
	},
	current_category (state, val) {
		const group = { ...state.group }
		group.current_category = val
		state.group = group
	},
	current_category_name (state, val) {
		state.group.current_category_name = val
	},
	resetFilter (state) {
		state.filter.writer = ''
		state.filter.content = ''
		state.filter.category = ''
	},
	resetGroup (state) {
		state.group.myRelation = false
		state.group.current_category = null
		state.group.chat_content = []
		state.group.category_list = [],
		state.group.category_insertId = false
		state.group.category_key = false
		state.group.room = false
		state.group.current_category_name = null

	}

}

export default mutations