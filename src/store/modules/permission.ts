// @ts-ignore: Unreachable code error
import { createStore } from 'vuex'
interface stateTypeString {
  name: string
}
interface stateType {
  permissionList: stateTypeString[],
  accessToken: string
}

const state: stateType = {
  permissionList: [],
  accessToken: ''
}
export default createStore({
  state: state,
  mutations: {
    SET_PERMISSIONLIST(state, route) {
      state.permissionList = route;
    },
  },
  actions: {
    FETCH_PERMISSION({ commit }, value) {
      commit('SET_PERMISSIONLIST', value);
    },
  },
  modules: {
  },
  getters: {
    permissionList: (state) => state.permissionList,
    accessToken: (state) => state.accessToken,
  }
})
