<template>
	<div class="friends-wrap">
		<p class="profile-title">내 프로필</p>
		<item :info="myself" />
		<hr class='contour' />
		<p class="profile-title">즐겨찾는 친구</p>
		<!-- <item v-for="(task, level) in tasks" :task="task" :level="level" :tidx="parent_task[level]" :deleteTask="states.deleteTask"/> -->
		<hr class='contour' />
		<p class="profile-title">즐겨찾는 그룹</p>
		<hr class='contour' />

	</div>
</template>
<script type="text/javascript">
	import item from './profile-item' 
	export default {
		components: {
			item
		},
		data() {
			return {
				default_img: './default-avatar.png',
				myself: this.$store.getters.member
			}
		}

	}
</script>