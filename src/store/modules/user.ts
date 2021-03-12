// @ts-ignore: Unreachable code error
import { createStore } from 'vuex'
interface userStateType {
    token: String,
    username: string,
    avatar: string,
}

const state: userStateType = {
    token: '',
    username: '',
    avatar: '',
}

export enum MutationTypes {
    SETTOKEN = 'SETTOKEN',
    SETUSERNAME = 'SETUSERNAME',
    SETAVATAR = 'SETAVATAR',
}

const mutations = {
    [MutationTypes.SETTOKEN](state: userStateType, token: string) {
        state.token = token
    },
    [MutationTypes.SETUSERNAME](state: userStateType, username: string) {
        state.username = username
    },
    [MutationTypes.SETAVATAR](state: userStateType, avatar: string) {
        state.avatar = avatar
    },
}

const actions = {
    [MutationTypes.SETTOKEN]({ commit }, token: string) {
        console.log(token, 'value');
        commit(MutationTypes.SETTOKEN, token)
    },
};

const getters = {
    token: (state: userStateType) => state.token,
    username: (state: userStateType) => state.username,
    avatar: (state: userStateType) => state.avatar,
}
export default { state, getters, mutations, actions, namespaced: true };
