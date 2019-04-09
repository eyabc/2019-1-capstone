const initState = {
	member: JSON.parse(localStorage.getItem('member')) || null,
	title: "CEO",
	leftMenuWidth: 500,
	leftMenu: false,
	rightMenu: false,
	notMember: false,
	isMember: 'relation',
	activity: 'list',
	info: false,
	friend: [],
	group: [],
	tempData: {},
	tempIdx: []
}

export default initState