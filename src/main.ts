import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')



function useFetch0() {
  const response = 'dddd'
  const age = 30
    return [response, age]
}

function useFetch() {
  const response = 'dddd'
  const age = 30
  return tulify(response, age)
}

function tulify<T extends  unknown[]> (...elements: T): T {
  return elements
}

//차이
const [response1] = useFetch0() //유형이 string | num
const [response] = useFetch() // string
const [response2, age2] = useFetch() //string, num




