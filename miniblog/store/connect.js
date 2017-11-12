import axios from 'axios'

export const state = () => ({
  userdata: {
    id: '',
    username: ''
  }
})

export const mutations = {
  SET_USERNAME (state, connect) {
    state.userdata.username = connect
  },
  SET_USER_ID (state, connect) {
    state.userdata.id = connect
  }
}

export const getters = {
  getuserid: state => state.userdata.id,
  getusername: state => state.userdata.username
}

export const actions = {
  test: ({commit}) => {
    commit('SET_USER', 'lmao')
  },
  Login: (state, login) => {
    return new Promise((resolve, reject) => {
      axios.post('/login', {
        username: login.username,
        password: login.password
      }).then(function (response) {
        if (response.data.length === 0) {
          resolve('error')
        } else {
          console.log(response.data)
          state.commit('SET_USER_ID', response.data[0].id)
          state.commit('SET_USERNAME', response.data[0].username)
          resolve(response)
        }
      }).catch(e => {
        reject(e)
      })
    })
  },
  Inscription: ({commit}) => {
    axios.post(`/login`, { username: 'jeanclaude1', password: '2' })
      .then(response => {
        commit('SET_ALL_PRODUCTS', response.data)
      }).catch(e => {
        throw (e)
      })
  }
}
