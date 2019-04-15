<template>
	<div>
		<div class="profile-wrap" v-for="(item, key) in list" @click="showMap(item)">
			<img class="profile-small-img"src="./default-avatar.png" alt="img" />
			<div class="profile-info">
				<p class="profile-nickname">{{ item.name }} 
					<span class="profile-message">{{ item.reg_date }}</span>
				</p> 
				<p class="profile-message">{{ item.profile_message }}</p>
			</div>
			<ul class="member-info-btn permit">
				<li><a class="title" @click.prevent="accpet(item.midx, key)"><i class="fas fa-plus"></i></a></li>			
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
  import eventBus from '@/eventBus'
	
	export default {
		components: {
			
		},
		data () {
			return {
			}
		},
		computed: {
			list () {
				return this.$store.state.mapSearchList
			}
		},
		async mounted () {
		},
		methods: {
			async accpet(midx, key) {
				if (confirm("친구 요청을 거절 하겠습니까?")) {
					await this.$store.dispatch('refuseFriend', { to: this.$store.state.member.idx, from: midx })
				}
			},
			showMap (data) {
				const location = { lat:data.lat , lng: data.lng}
				const datas = { nickname:data.name , place: data.place }
				eventBus.setLocation(location, datas)
			}
		}
	}
</script>
<style type="text/css">
.permit {
	position: absolute;
	display: flex;
	right: 0;
	>li>a {
	}
}
</style>