const initState = {
	member: JSON.parse(localStorage.getItem('member')) || null,
	title: "CEO",
	leftMenuWidth: 500,
	leftMenu: false,
	notMember: false,
	isMember: 'relation',
	activity: 'list',
	info: false,
	friend: [],
	group: [],
	tempData: {},
	tempIdx: [],
	searchedEmail: null,
	mapSearchList: [],
	groupInfo: [],
	getGroupMemberRelation: false,
	socket: null,
	groupComp: false,
	group: {
		myRelation: false,
		current_category: false,
		chat_content: [],
		category_list: [],
		category_insertId: false,
	}
}

export default initState