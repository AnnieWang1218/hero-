<template>
    <!-- 侧边栏 -->
    <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active">
              <router-link to="/herolist">英雄列表</router-link>
            </li>
            <li>
              <router-link to="/foo">武器列表</router-link>
            </li>
            <li>
              <router-link to="/bar">装备列表</router-link>
            </li>
          </ul>
    </div>
</template>


<script>
export default {
    
}
</script>


<style>



</style>