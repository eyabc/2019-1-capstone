<template>
	<div>
		<ul class="member-info-btn title">
			<li><a class="title" href="#" :class="{active:component==='friendReceived'}" @click.prevent="component = 'friendReceived'"># 나에게 온 친구 요청</a></li>
			<li><a class="title" href="#" :class="{active:component==='friendSend'}" @click.prevent="component = 'friendSend'"># 나의 친구 요청</a></li>
		</ul>
		<component :is="component" />
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			friendSend: () => import('./friend-send'),
			friendReceived: () => import('./friend-received')
		},
		data () {
			return {
				component: 'friendReceived',
			}
		},
		created () {
		}
	}
</script>