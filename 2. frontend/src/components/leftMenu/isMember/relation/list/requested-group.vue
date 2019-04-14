<template>
	<div>
		<ul class="member-info-btn title">
			<li><a class="title" href="#" :class="{active:component==='groupReceived'}" @click.prevent="component = 'groupReceived'"># 나에게 온 그룹 초대</a></li>
			<li><a class="title" href="#" :class="{active:component==='groupSend'}" @click.prevent="component = 'groupSend'"># 나의 그룹 참여 요청</a></li>
		</ul>
		<component :is="component" />
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			groupReceived: () => import('./group-received'),
			groupSend: () => import('./group-send'),
		},
		data () {
			return {
				component: 'groupReceived',
			}
		}
	}
</script>