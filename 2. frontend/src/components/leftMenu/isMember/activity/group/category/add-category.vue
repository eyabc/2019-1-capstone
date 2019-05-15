<template>
	<div class="add-category-wrap">
		<form @submit.prevent = "submit" >
			<ul>
				<li>
					<label class="select-lbl">
						<span class="title-ct">상위 카테고리 선택</span>
						<select class="select-form" v-model="data.upper_category">
							<option value="null">없음</option>
							<option :value="item.idx" v-for="(item, index) in category_list">{{item.name}}</option>
						</select>
					</label>
				</li>				
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-tag"></i></span>
						<input type="text" v-model="data.name"
						class="full-width" required placeholder="카테고리 이름"> 
					</label>
				</li>
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-sticky-note"></i></span>
						<textarea v-model="data.description" class="full-width" placeholder="카테고리 설명"></textarea>
					</label>
				</li> 
				<li>
					<div class="input-label ">
						<label class="title-ct">공개 여부</label>
						<span ><a href="#" :class="{actives:data.authority===1}" class="dashed-btn abc" ref="public" @click.prevent="setData('authority',1)">공개</a></span>(매니저만 볼 수 있음)
						<span ><a :class="{actives:data.authority===0}" class="dashed-btn abc" href="#" ref="private"  @click.prevent="setData('authority',0)">비공개</a></span><br/>
					</div> 
				</li>
				<input class="login-btn btn" type="submit" value="추가 하기">
			</ul> 
		</form>
	</div>
</template>
<script type="text/javascript">
	import eventBus from '@/eventBus'

	export default {
		data() {
			return {
				data: {
					upper_category: null,
				// authority {공개: 1, 비공개: 0 }
				authority: 1,
				name: '',
				description: ''
			},
			category_list : this.$store.state.group.category_list, 
		}
	},

	methods: {
		setData (data, num) {
			this.data[data] =  num
			console.log(this.data[data])
		},
		async submit (e) {
			await this.$store.dispatch('createCategory', this.data)
			Object.assign(this.data, {idx: this.$store.state.group.category_insertId})
			console.log(this.data)
			this.$store.commit('updateCategory_list', this.data)
			alert("추가 되었습니다.")
			this.$store.commit('groupComp', {upper: 'category', lower: 'getList'})
		}
	}
}
</script>
<style lang="scss">
.width1 {
	width: auto;
}
.title-ct {
	font-size: 17px;
	font-weight: bold;
	line-height: 50px;
	padding: 0 20px 0 10px;
}
.select-lbl {
	display: flex;
}
.select-form { 
	box-sizing: border-box;
	outline: 1px #FFD6AC solid;
	font-size: 15px;-webkit-appearance:none;border: #fff; 
	padding-left: 10px;
	width: calc(100% - 178px);
}
.add-category {
	&-wrap {
		padding: 10px;
		li { 	padding: 5px 0;}
	}

}
.abc {
	font-weight: bold;
	width: auto;
	display: inline-block;
	margin: 10px 8px;
	width: 90px;
	border: dashed 1px #FFBB77;		
	height: 40px;
	text-align: center;
	border-radius: 7px;
	font-weight:bold;
	line-height: 40px;	
}
.actives {
	background: #FFBB77;
}

</style>