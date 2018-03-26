// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import firebase from 'firebase'

Vue.config.productionTip = false

// var config = {
//   apiKey: 'AIzaSyAL-Vr6SGaLzinNRNmAVX5UmDdeT5FWrQI',
//   authDomain: 'todo-fancy-198007.firebaseapp.com',
//   databaseURL: 'https://todo-fancy-198007.firebaseio.com',
//   projectId: 'todo-fancy-198007',
//   storageBucket: '',
//   messagingSenderId: '723392645847'
// }

// firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
