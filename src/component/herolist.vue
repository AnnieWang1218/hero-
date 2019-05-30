<template>
    <!-- 需要渲染静态页面 -->
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">英雄列表</h2>
        <router-link class="btn btn-success" to="addHero">添加</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for='(item,index) in list' :key='index'>
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>
                <!-- 这里的编辑是需要切换视图页面的.但是不跳转.需要用到路由.-->
                  <router-link :to="'/edit/'+item.id">编辑</router-link>
                  &nbsp;&nbsp;
                  <a href="#" @click='del(item.id)'>删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


</template>


<script>
import axios from 'axios'
export default {
    data:function(){
        return {
            list:[],
            url:'http://localhost:8888/heros',
        }
    },
    methods:{
        //获取所有的英雄数据
        getListData(){
            axios.get(this.url)
            .then(res=>{
                this.list = res.data
            })
        },
        //给删除按钮注册事件:这里面有id参数
        del(id){
            if(confirm('请确认是否删除?')){
                axios.delete(this.url+'/'+id)
                .then(res=>{
                this.getListData()
                })
            }
        },
    },
    mounted:function(){
        this.getListData()
    }
}
</script>



<style>



</style>