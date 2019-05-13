<template>
	<div class="filter-wrap">
		<p class="filter-header">검색 옵션</p>
		<ul>
			<li>
				<!-- <span class="lbl">날짜</span> -->
				<!-- <DateRangePicker :from="$route.query.from" :to="$route.query.to" :panel="$route.query.panel" @update="update"/> -->
			</li>
			<li>
				<span class="lbl">작성자</span>
				<span class="desc"><input></span>
			</li>
			<li>
				<span class="lbl">내용</span>
				<span class="desc"><input></span>
			</li>
			<li>
				<span class="lbl">카테고리</span>
				<span class="desc"><input></span>
			</li>
			<li>
				<span class="lbl">그룹</span>
				<span class="desc"><input></span>
			</li>
		</ul>	
	</div>
</template>
<script type="text/javascript">

	export default {
		components: {
			
		},
		data () {
			return {
			}
		},
		methods: {
			update(values) {
				this.$router.push({ query: Object.assign({}, this.$route.query, {
					to: values.to,
					from: values.from,
					panel: values.panel
				}) })
			}
		}
	}
</script>
