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
	socket: null
}

export default initState