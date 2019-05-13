<template>
	<div class="member-info-desc">
		<ul class="group-info">
			<li><label>내 권한</label><span>{ item.description}</span></li>
		</ul>
		<ul class="member-info-btn">
			<li><a href="#" class="title cb" @click.prevent="showMap">그룹 나가기</a></li>
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