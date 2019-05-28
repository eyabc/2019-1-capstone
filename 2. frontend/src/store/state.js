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
	groups: [],
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
		current_category: null,
		chat_content: [],
		category_list: [],
		category_insertId: false,
		category_key: false,
		room: false,
		current_category_name: null,
	},
	participant: false,
	filter: {
		writer: '',
		content: '',
		category: '',
	}
}

export default initState