<template>
	<div>
		<ul class="member-info-btn title">
			<li><a class="title" href="#" :class="{active:component==='all'}" @click.prevent="component = 'all'">전체</a></li>
			<li><a class="title" href="#" :class="{active:component==='requestedFriend'}" @click.prevent="component = 'requestedFriend'">대기 친구</a></li>
			<li><a class="title" href="#" :class="{active:component==='requestedGroup'}" @click.prevent="component = 'requestedGroup'">대기 그룹</a></li>
		</ul>
		<component :is="component" class=""/>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			all: () => import(`./list/all`),
			requestedFriend: () => import(`./list/requested-friend`),
			requestedGroup: () => import(`./list/requested-group`),

		},
		data () {
			return {
				component: 'all',
			}
		},
		
	}
</script>