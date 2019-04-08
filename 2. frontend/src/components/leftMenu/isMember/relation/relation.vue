<template>
	<div>
		<ul class="member-info-btn title">
			<li><a class="title" href="#" @click.prevent="">전체</a></li>
			<li><a class="title" href="#" @click.prevent="$store.commit('isMember', 'requestedFriend')">대기 친구</a></li>
			<li><a  class="title" href="#" @click.prevent="$store.commit('isMember', 'requestedGroup')">대기 그룹</a></li>
		</ul>
		<component :is="$store.state.isMember" class="ismember-content"/>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			all: () => import(`./all`),
			requestedFriend: () => import(`./requested-friend`),
			requestedGroup: () => import(`./requested-group`),

		}
	}
</script>