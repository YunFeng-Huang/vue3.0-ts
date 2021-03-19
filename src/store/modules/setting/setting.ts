

// @ts-ignore: Unreachable code error
import { createStore } from 'vuex'
import { MUTATIONTYPES, settingStateType } from './setting_d';


const state: settingStateType = {
    collapse: true,
}

const mutations = {
    [MUTATIONTYPES.TOGGLECOLLAPSE](state: settingStateType, collapse: boolean) {
        state.collapse = collapse
    },
}

const actions = {};
const getters = {
    collapse: (state: settingStateType) => state.collapse,
}

export default { state, getters, mutations, actions, namespaced: true };
