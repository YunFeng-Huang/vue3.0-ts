// @ts-ignore: Unreachable code error
import { createStore } from 'vuex'
import { MUTATIONTYPES, userStateType } from './user_d'

const state: userStateType = {
    token: '',
    username: '',
    avatar: '',
}

const mutations = {
    [MUTATIONTYPES.SETTOKEN](state: userStateType, token: string) {
        state.token = token
    },
    [MUTATIONTYPES.SETUSERNAME](state: userStateType, username: string) {
        state.username = username
    },
    [MUTATIONTYPES.SETAVATAR](state: userStateType, avatar: string) {
        state.avatar = avatar
    },
}

const actions = {
    [MUTATIONTYPES.SETTOKEN]({ commit }, token: string) {
        console.log(token, 'value');
        commit(MUTATIONTYPES.SETTOKEN, token)
    },
};

const getters = {
    token: (state: userStateType) => state.token,
    username: (state: userStateType) => state.username,
    avatar: (state: userStateType) => state.avatar,
}
export default { state, getters, mutations, actions, namespaced: true };