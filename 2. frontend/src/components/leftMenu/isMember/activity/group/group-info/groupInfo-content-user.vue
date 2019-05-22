<template>
	<div class="member-info-desc">
		<ul class="group-info">
			<li><label>내 권한</label><span class="content" v-html="group_auth(myData.request, myData.authority)"></span></li>
		</ul>
		<ul class="member-info-btn">
			<li><a href="#" class="title cb" @click.prevent="exitGroup">그룹 나가기</a></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			info: () => import ('./user/info'),
			option: () => import ('./user/option'),
		},
		data () {
			return {
				myData: this.$store.state.group.myRelation
			}
		},
		methods: {
			exitGroup () {
				this.$store.dispatch('deleteGroupParticipant', {midx: this.myData.midx, cgidx: this.myData.cgidx })
				this.$store.commit('groupComp', false)
				this.$store.commit('isMember', 'relation')
			}
		}
	}
</script>