<template>
	<div>
		<ul class="member-info-btn" >
			<li><a href="#" class="title" @click.prevent="logout">로그아웃</a></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		methods: {
			logout () {
				// version1에서는 localStorage logout을 합니다. 
				this.$store.commit('logout', null)

			}
		}
	}
</script>