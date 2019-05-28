<template>
	<div>
		<ul class="member-info-btn title">
			<li><a href="#" :class="{active:component==='group'}" class="title" @click.prevent="component='group'">그룹 메세지</a></li>
			<li><a href="#" :class="{active:component==='category'}" class="title" @click.prevent="component='category'" >카테고리 메세지</a></li>
			<li><a href="#" class="title new" @click.prevent="$store.commit('activity', 'createGroup')">그룹 생성</a></li>
		</ul>
		<ul>
			<li class="profile-wrap" @click="">
				<div class="profile-info">
				<p class="profile-nickname">그룹이름>카테고리이름 <span class="new-status">new </span></p>

				<span class="profile-nickname writer">작성자</span>
				<span class="profile-message">작성시간</span>
				<p>contenssssst</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			pushItem: () => import('./push-item')
		},
		data () {
			return {
				component: 'group',

			}
		}
	}
</script>
<style>
.writer {
	display: inline-block;
	padding-right: 10px;
}
.profile-nickname {
	font-weight: bold;
}
.new-status {
	color: red;
}
</style>