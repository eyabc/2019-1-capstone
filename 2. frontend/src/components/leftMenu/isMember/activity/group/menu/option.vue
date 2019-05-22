<template>
	<div class="option-wrap"> 
		<p class="category-option">
			<span @click="groupAbout"><i class="fas fa-info-circle"></i></span>
			<span @click="groupSetting" v-if="$store.state.group.myRelation.authority === 0"><i class="fas fa-cog"></i></span>
			<span @click="groupUser"><i class="fas fa-user-alt"></i></span>
		</p>
	</div>
</template>
<script type="text/javascript">
	// user와 manager일 떄 검사하고 아이콘을 다르게한다. 
	export default {
		components: {
		},
		data () {
			return {
			}
		},
		methods: {
			groupAbout () {
				this.$store.commit('groupComp', {upper: 'groupAbout'})
			},
			groupSetting () {
				this.$store.commit('groupComp', {upper: 'groupInfo', auth: 'manager', lower:'editGroupInfo'})
			},
			groupUser () {
				this.$store.commit('groupComp', {upper: 'groupInfo', auth: 'user'})
			}
		}
	}
</script>
