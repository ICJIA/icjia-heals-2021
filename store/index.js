export const state = () => ({
  appConfig: () => {},
  searchIndex: () => [],
  appEnv: process.env.NODE_ENV,
})

export const mutations = {
  setAppConfig(state, config) {
    state.appConfig = config
  },
  setSearchIndex(state, searchIndex) {
    state.searchIndex = searchIndex
    // console.log('search: ', state.searchIndex)
  },
}

export const getters = {
  getConfig: (state) => {
    return state.appConfig
  },
}

export const actions = {
  async nuxtServerInit(
    { commit, dispatch },
    { store, route, params, redirect, app }
  ) {
    const config = await require('@/config.json')
    commit('setAppConfig', config)

    const searchIndex = await require('@/static/api/search.json')
    commit('setSearchIndex', searchIndex)
  },
}
