import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import Loading from 'vue-loading-overlay'
import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import router from './router/router'
import store from './store/store'
import currency from '@/filters/currency'
import changeTime from '@/filters/changeTime'

import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'

Vue.filter('currency', currency)
Vue.filter('changeTime', changeTime)

Vue.component('Loading', Loading)
axios.defaults.withCredentials = true
Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiredUser) {
    const url = `${process.env.VUE_APP_PATH}/api/user/check`
    axios.post(url).then(res => {
      if (res.data.success) {
        next()
      } else {
        alert('請重新登入')
        next({ path: '/login' })
      }
    })
  } else {
    next()
  }
})
