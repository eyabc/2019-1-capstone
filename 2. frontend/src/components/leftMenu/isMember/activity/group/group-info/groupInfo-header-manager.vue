<template>
	<div>
		<ul class="member-info-btn">
			<li><a class="title" href="#" @click.prevent=""># 그룹 환경 설정</a></li>
			<li><a class="title" href="#" :class="{active:component === 'editGroupInfo'}" @click.prevent="editGroupInfo" >그룹 정보 변경</a></li> 
			<li><a class="title" href="#" :class="{active:component === 'setParticipant'}" @click.prevent="setParticipant" >참여자 관리</a></li> 
			<li><a class="title" href="#" :class="{active:component === 'addParticipant'}" @click.prevent="addParticipant" >참여자 추가</a></li> 
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		methods: {
			editGroupInfo () {
				this.$store.commit('groupComp', {upper: 'groupInfo', auth: 'manager', lower:'editGroupInfo'})
			},
			setParticipant () {
				this.$store.commit('groupComp', {upper: 'groupInfo', auth: 'manager', lower:'setParticipant'})
			},
			addParticipant () {
				this.$store.commit('groupComp', {upper: 'groupInfo', auth: 'manager', lower:'addParticipant'})
			}
		},
		computed: {
			component () {
				return this.$store.state.groupComp.lower
			}
		}
	}
</script>