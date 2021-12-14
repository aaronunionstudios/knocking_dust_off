// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#vue_det',
  // router,
  // components: { App },
  // template: '<App/>',
  data: {
    firstname: 'ria',
    lastname: 'Singh',
    address: 'Mumbai'
  },
  methods: {
    mydetails: function () {
      return 'I am ' + this.firstname + ' ' + this.lastname
    }
  }
})
