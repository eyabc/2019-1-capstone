import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftMenu: false,
    member: false,
  },
  mutations: {
   LeftMenu(state, val) {
    state.leftMenu = val
  },
},
actions: {

},
getters: {

}

})
