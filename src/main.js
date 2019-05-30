import Vue from 'vue'
//引入路由文件
import Router from './router/index.js'
import App from './App.vue'


//引入样式
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/index.css'




new Vue({
  el: '#app',
  router:Router,
  render: h => h(App)
})
