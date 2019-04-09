<template>
	<div>
		<ul class="member-info-btn fixed">
			<li><a href="#" class="title" @click.prevent="">그룹 메세지</a></li>
			<li><a href="#" class="title" @click.prevent="" >카테고리 메세지</a></li>
			<li><a href="#" class="title new" @click.prevent="$store.commit('activity', 'createGroup')">그룹 생성</a></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			pushItem: () => import('./push-item')
		}
	}
</script>
<style>
</style>