import axios from 'axios'

axios.defaults.baseURL = process.env.baseUrl
// axios.defaults.headers.common['X-Mashape-Key'] = process.env.apikey

export const state = () => ({
  counter: ''
})

export const mutations = {
  SET_ALL_PRODUCTS (state, name) {
    state.counter = name
  }
}

export const getters = {
  getcounter: state => state.counter
}

export const actions = {
  GetAllProducts: ({commit}) => {
    axios.post(`/login`, { username: 'jeanclaude1', password: '2' })
      .then(response => {
        commit('SET_ALL_PRODUCTS', response.data)
      }).catch(e => {
        throw (e)
      })
  }
}
