<template>
	<div>
		<ul class="member-info-btn">
			<li><a class="title" href="#" @click.prevent=""># 내 정보</a></li>
			<!-- <li><a class="title" href="#" :class="" @click.prevent="" >목록</a></li> -->
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			info: () => import ('./user/info'),
			option: () => import ('./user/option'),
		}
	}
</script>