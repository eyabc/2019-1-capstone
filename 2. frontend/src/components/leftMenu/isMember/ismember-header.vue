<template>
	<div class="ismember-header-wrap">
		<div class='ismember-header-search'>
			<form @submit.prevent>
				<label class="ismember-header-search-label">
					<span @mousedown="hoverToggle" class="ismember-header-search-icon"><i class="fas fa-pencil-alt"></i></span>
					<input type="text" name="place" placeholder="친구 검색" required>
				</label>
				<input type="submit">
				<div class="ismember-header-search-more" v-if="hover" >
					<p><input type="text" name="nameInplace" placeholder="닉네임"></p>
					<p><input type="text" name="nameAll" placeholder="이메일"></p>
					<p><input type="text" name="theme" placeholder="그룹"></p>
					<p><input type="text" name="theme" placeholder="카테고리"></p>
				</div>
			</form>
		</div>
		<ul class = "ismember-header-navigation">
			<li><i class="fas fa-user-friends"></i></li>
			<li><i class="fas fa-comment"></i></li>
			<li><i class="fas fa-users"></i></li>
			<li><i class="fas fa-user-alt"></i></li>
			<li><i class="fas fa-cog"></i></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				hover: false
			}
		},
		methods : {
			hoverToggle() {
				this.hover = !this.hover
			}
		}
	}
</script>