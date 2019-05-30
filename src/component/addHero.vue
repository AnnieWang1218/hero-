<template>
    <div class="container-fluid">
    <div class="row">
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">姓名</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="姓名" v-model='name'>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">性别</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" id="exampleInputPassword1" name="gender" v-model='gender' value="男">男&nbsp;&nbsp;
            <input type="radio" id="exampleInputPassword1" name="gender" v-model='gender' value="女">女
          </div>
          <button type="submit" class="btn btn-success" @click='addHero'>添加</button>
        </form>
      </div>
    </div>
  </div>


</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            url:'http://localhost:8888/heros',
            name:'',
            gender:''
        }
    },
    methods:{
        //获取页面的数据.并提交
        addHero(){
            axios.post(this.url,{
                name:this.name,
                gender:this.gender
            }).then(res=>{
                console.log(res);
                alert('添加成功!')
                this.$router.push('/herolist')
            })
        }
    }
}
</script>

<style>

</style>


