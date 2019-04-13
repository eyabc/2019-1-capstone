<template>
  <div class="member-info-wrap" @click="">
    <div class="member-info-short ">
      <img class="member-info-small-img"src="./default-avatar.png" alt="img" />
      <div class="member-info-desc">
        <h3 class="member-info-nickname">{{data.nickname}}</h3><hr/>
        <p class="member-info-etc">{{ data.profile_message }}</p>
        <p class="member-info-etc">{{ data.email }}</p>
        <p class="member-info-etc">가입 날짜 : {{ data.reg_date }}</p>
      </div>
    </div><br/>
    <ul class="member-info-btn" >
      <li><a href="#" class="title" @click.prevent="setRequest">{{ request }}</a></li>
      <li><a href="#" class="title" @click.prevent="acceptRequest" v-if="state===3">수락</a></li>
      <li><a href="#" class="title" @click.prevent="refuseRequest" v-if="state===3 ">거절</a></li>
    </ul>
  </div>
</template>
<script type="text/javascript">

  export default {
    data () {
      return {
        myIdx: this.$store.state.member.idx,
      }
    },
    created() {
    },
    computed: {
      request () {
        if(this.myIdx === this.data.idx) {
          return '내 정보 입니다'
        } else {
          return this.$store.state.tempData.message 
        }
      },
      state () {
        return this.$store.state.tempData.state
      },
      data () {
        return this.$store.state.searchedEmail
      }
    },
    methods: {
      setRequest () {
        if ((this.data.idx !== this.myIdx)) {
          switch(this.state) {
            case 0:
              // 친구 요청
              this.$store.dispatch('createFriendRelation', { from: this.myIdx, to: this.data.idx })
              break;
              case 1:
              // 친구 입니다. 친구 삭제 
              this.$store.dispatch('deleteFriend', {idx: this.data.idx, state: 'result-email' })
              break;
              case 2:
              // 친구 요청 취소
              this.$store.dispatch('deleteFriendRelation', {from: this.myIdx ,to: this.data.idx })
              break;
              case 3:
              // 나에게 친구요청을 보냈습니다. 
              break;
              // 해당 안됨
              default:
              return
            }
          }
        },
        acceptRequest () {
          this.$store.dispatch('createFriendRelation', { from: this.myIdx, to: this.data.idx })

        },
        refuseRequest () {
          this.$store.dispatch('deleteFriendRelation', { from: this.data.idx, to: this.myIdx})
        }
      }
    }
  </script>
