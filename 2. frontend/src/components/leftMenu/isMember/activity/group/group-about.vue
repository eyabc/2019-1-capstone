<template>
	<div class="groupAbout-wrap">
		<div class="member-info-desc">
			<h3>{{data.name}}</h3><hr/>
			<ul class="group-info">
				<li><label>설명</label><br/><span class="content">{{data.description}}</span></li>
				<li><label>매니저</label><span class="content" v-html="manager()"></span></li>
				<li><label>참여자 초기 권한</label><span class="content" v-html="group_auth(0, data.default_authority)"></span></li>
				<li><label>공개여부</label><span class="content" v-html="group_visibility(data.visibility)"></span></li>
				<li><label>그룹 허가</label><span class="content" v-html="group_permission(data.permission)"></span></li>
				<li><label>생성날짜</label><span class="content">{{data.reg_date}}</span></li>
				<li><label>위치</label><br/><span class="content">{{data.place}}</span></li>
			</ul>
			<ul class="member-info-btn" v-if="this.data.lat !== 0 & this.data.lng !== 0">
				<li><a href="#" class="title cb" @click.prevent="showMap">위치정보조회</a></li>
			</ul>
		</div>
		<div class="member-info-desc">
			<h3>그룹 참여자</h3><hr/>
			<ul class="group-info">
				<li v-for="(item, key) in participant">
					<label>{{item.nickname}}</label><span>{{item.reg_date}} <span class="content" v-html="group_auth(item.request, item.authority)"></span></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
  	import eventBus from '@/eventBus'
	export default {
		data () {
			return {
				data : this.$store.state.groupInfo,
				participant: this.$store.state.participant
			}
		},
		computed: {
			myData () {
				return this.$store.getters.member
			}
		},
		methods: {
			showMap () {
				const Location = { lat: this.data.lat, lng: this.data.lng }
				eventBus.setLocation(Location)
			},
			setMyinfo () {
				this.$store.commit('info', 'setMyInfo')
			},
			manager () {
				const data = this.participant.find(v => v.authority === 0)
				return data.nickname + ' ' + data.reg_date
			}
		}
	}
</script>
<style type="text/css">
</style>