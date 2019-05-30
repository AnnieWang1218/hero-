<template>
  <div id="app">
    <!-- 顶部导航组件使用 -->
    <Head></Head>
    <!-- 侧边栏 + 内容 -->
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏组件使用 -->
        <Aside></Aside>
        <!-- 将来内容的渲染容器 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
//引入布局组件
import Head from './component/layout/head.vue'
import Aside from './component/layout/aside.vue'

export default {
  data(){
    return {}
  },
  components:{
    Head:Head,
    Aside:Aside,
  }

};
</script>

<style>
</style>
