	<template>
		<div>
			<ul class="member-info-btn">
				<li><a class="title" href="#" @click.prevent="">모두보기</a></li>
				<li><a class="title" href="#" :class="" @click.prevent="" >매니저</a></li>
				<li><a class="title" href="#" :class="" @click.prevent="" >읽기</a></li>
				<li><a class="title" href="#" :class="" @click.prevent="" >읽기/쓰기</a></li>
				<li><a class="title" href="#" :class="" @click.prevent="" >참여대기</a></li>
			</ul>
			<ul class="participant-item">
				<li>
					<span>
						<span class="name">이름</span>
						<span>가입날짜</span>
					</span>
					<span>
						<select name="" class="">
							<option value="">매니저</option>
							<option value="">읽기</option>
							<option value="">읽기/쓰기</option>
							<option value="">참여대기</option>
						</select>
						<span class=""><i class="fas fa-times"></i></span>
					</span>
				</li>
			</ul>
		</div>
	</template>
	<script type="text/javascript">
		// 클릭하면 참여자 정보 조회가능 
		export default {

		}
	</script>
	<style lang="scss">
	.participant-item {
		li { padding: 10px 0; display: flex; justify-content: space-between}
		select {margin: 0 10px;
			box-sizing: border-box;
			outline: 1px #FFD6AC solid;
			font-size: 15px;
			border: #fff;
			padding-left: 10px;
			height: 40px;
		}
		option {  width: 50px; }
		.fa-times {padding: 10px; cursor: pointer; transition: 0.3s;
			&:hover { transition: 0.3s; color: red}
		}
	}
	</style>