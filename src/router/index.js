//路由管理
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入路由组件
import Herolist from '../component/herolist.vue'
import Foo from '../component/foo.vue'
import Bar from '../component/bar.vue'
import Edit from '../component/edit.vue'
import AddHero from '../component/addHero.vue'
//配置路由选项
let routes = [
  {path:'/herolist',component:Herolist},
  {path:'/foo',component:Foo},
  {path:'/bar',component:Bar},
  {path:'/edit/:id',component:Edit},
  {path:'/addHero',component:AddHero},
]
//创建路由对象
let router = new VueRouter({
  routes:routes
})

export default  router