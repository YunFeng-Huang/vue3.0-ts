

// @ts-ignore: Unreachable code error
import { createStore } from 'vuex'
interface settingStateType {
    collapse: boolean,
}

const state: settingStateType = {
    collapse: true,
}


export enum MutationTypes {
    TOGGLECOLLAPSE = 'TOGGLECOLLAPSE',
}

const mutations = {
    [MutationTypes.TOGGLECOLLAPSE](state: settingStateType, collapse: boolean) {
        state.collapse = collapse
    },
}

const actions = {};
const getters = {
    collapse: (state: settingStateType) => state.collapse,
}

export default { state, getters, mutations, actions, namespaced: true };
