<template>
	<div class="add-category-wrap">
		<form>
			<ul class="">
				<li>
					<label class="select-lbl">
						<span class="title-ct">상위 카테고리 선택</span>
						<select name="" class="select-form">
							<option value="없음" selected="selected">없음</option>
							<option value="하위1">하위1</option>
							<option value="하위2" ">하위2</option>
						</select>
					</label>
				</li>				
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-tag"></i></span>
						<input type="text"  
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
					<div class="input-label">
						<label class="title-ct">공개 여부</label>
						<span  :class="{active:data.authority===1}"><a href="#" class="dashed-btn abc" ref="public" @click.prevent="setData('authority',1)">공개</a></span>(매니저만 볼 수 있음)
						<span :class="{active:data.authority===0}"><a class="dashed-btn abc" href="#" ref="private"  @click.prevent="setData('authority',0)">비공개</a></span><br/>
					</div> 
				</li>
				
				<input class="login-btn btn" type="submit" value="추가 하기">
			</ul> 
		</form>
	</div>
</template>
<script type="text/javascript">
import 'babel-polyfill'; // es6 shim
import myUpload from 'vue-image-crop-upload';
import eventBus from '@/eventBus'

export default {
	components: {
		'my-upload': myUpload
	},
	data() {
		return {
			show: false,
			data: {
				visibility: 0,
				name: '',
				default_authority: 0,
				permission: 0,
      			image: '', // the datebase64 url of created image
      			place: '',
      			lat: '',
      			lng: '',
      			password: '',
      			description: '',
      			manager: this.$store.state.member.idx
      		},

      	}
      },
      created() {
      },
      computed: {
      	messages () {
      		return this.member.profile_message
      	}
      },
      mounted() {
      	var json_data = this.$store.state.friend
      	var result = [];

      	for(var i in json_data)
      		result.push({'idx':json_data[i].idx,'name': json_data[i].nickname, '가입날짜': json_data[i].reg_date});
      	this.friends = result

      	eventBus.initLocation(this)
      	eventBus.initSearchBox(this.$refs.place)
      	this.$on('getLocation', location => {
      		this.data.lat = location.lat
      		this.data.lng = location.lng
      	})
      },
      methods: {
      	setData (data, num) {
      		this.data[data] = num === this.data[data] ? 0 : num
      	},
      	toggleShow () {
      		this.show = !this.show;
      	},
      	initImage () {
      		this.data.image = ''
      	},    
      	insertGroup (e) {
      		let data = this.data
      		let data2 = this.data2
      		if(this.data.visibility === 0) {
      			alert('공개 여부를 지정하세요')
      			return
      		} else if(this.data.default_authority === 0) {
      			alert('참여자 초기 권한을 지정하세요')
      		} else {
      			this.$store.dispatch('insertGroup', {data, data2})
      		}

      	},
      	setFriends(e) {
      		this.data2.friends = e 
      	},
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

</style>