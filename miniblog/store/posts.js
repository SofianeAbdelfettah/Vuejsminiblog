import axios from 'axios'

export const state = () => ({
  posts: ''
})

export const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
  }
}

export const getters = {
  getposts: state => state.posts
}

export const actions = {
  Getall: (state, login) => {
    return new Promise((resolve, reject) => {
      axios.get('/posts').then(function (response) {
        if (response.data.length === 0) {
          resolve('error')
        } else {
          console.log(response.data)
          state.commit('SET_POSTS', response.data)
          resolve(response)
        }
      }).catch(e => {
        reject(e)
      })
    })
  }
}
