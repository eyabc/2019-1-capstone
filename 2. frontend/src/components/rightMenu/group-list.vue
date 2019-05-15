<template>
	<div>
		<div class="profile-wrap" v-for="(item, key) in list" >
			<div class="profile-wrap" @click="showMap(item)">
				<img class="profile-small-img" src="./default-avatar.png" alt="img" />
				<div class="profile-info">
					<p class="profile-nickname">{{ item.name }} 
						<span class="profile-message">{{ item.reg_date }}</span>
					</p> 
					<p class="profile-message">{{ item.description }}</p>
					<p class="profile-message">{{ item.place }}</p>
				</div>
			</div>
			<ul class="member-info-btn permit">
				<li><a class="title" @click.prevent="view(item.cgidx)"><i class="fas fa-ellipsis-h"></i></a></li>			
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
			async view(cgidx) {
				await this.$store.dispatch('getGroupInfo', { cgidx: cgidx })
				await this.$store.dispatch('getGroupMemberRelation')
				eventBus.rightMenu = 'groupInfo'
			},
			showMap (data) {
				const location = { lat:data.lat , lng: data.lng}
				const datas = { nickname:data.name , place: data.place }
				eventBus.setLocation(location)
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
.profile-wrap {
	height: auto;
}
</style>
