<template>
	<div>
		<ul class="member-info-btn title">
			<li><a class="title" href="#" :class="{active:component===''}" @click.prevent="component = ''"># 나에게 온 그룹 초대</a></li>
			<li><a class="title" href="#" :class="{active:component===''}" @click.prevent="component = ''"># 나의 그룹 참여 요청</a></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				component: false,
			}
		}
	}
</script>