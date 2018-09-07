/**
 * 这些大写变量可以写到一个js里去
 */
const ISLOGINED = 'ISLOGINED'
const USERINFO = 'USERINFO'
const KEYWORD = 'KEYWORD'
/**
 * 自定义变量
 */
const state = {
    keyWord: 'demo',
    islogined: false,
    loginInfo: {
        name: 'cC'
    }
}
/**
 * 只读
 */
const getters = {
    keyWord: state => state.keyWord,
    islogined: state => state.islogined,
    loginInfo: state => state.loginInfo
}
/**
 * 异步操作
 */
const actions = {
    /*
    async [ISLOGINED] ({ commit, state, dispatch }, config = {}) {
        try {
            let data = await api.promisePost(api.url.login, config)
            if (data.code === 200) commit(USERINFO, data)
        } catch (error) { console.log(error) }
    },
    */
    setKeyWord ({ commit }, status) {
        commit(KEYWORD, status)
    },
    setLoading ({
        dispatch,
        commit
    }, status) {
        commit(ISLOGINED, status)
        dispatch('setUserInfo', { name: 'kK' })
    },
    setUserInfo ({
        commit
    }, status) {
        commit(USERINFO, status)
    }
}
/**
 * 同步操作
 */
const mutations = {
    [KEYWORD] (state, payload) {
        state.keyWord = payload
    },
    [ISLOGINED] (state, payload) {
        state.islogined = payload
    },
    [USERINFO] (state, payload) {
        state.loginInfo = payload
    }
}

export default {
    namespaced: true, // 独立的命名空间，避免state值冲突
    state,
    actions,
    getters,
    mutations
}
