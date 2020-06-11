//import { login, logout, getInfo } from '@/api/user'
//import { getToken, setToken, removeToken } from '@/utils/auth'
//import { resetRouter } from '@/router'


const state =  {
    
    
      name: ''
      
    
  }

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  }

}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
 
 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

