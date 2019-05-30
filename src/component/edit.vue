<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">修改英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">姓名</label>
            <input type="text" v-model="list.name" class="form-control" id="exampleInputEmail1">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">性别</label>&nbsp;&nbsp;&nbsp;
            <input type="radio" v-model="list.gender" id="exampleInputPassword1" value="男" name="gender">男&nbsp;&nbsp;
            <input type="radio" v-model="list.gender" id="exampleInputPassword1"  value="女" name="gender">女
          </div>
          <button type="submit" class="btn btn-success" @click.prevent='editHero'>修改</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data:function(){
        return {
            url:'http://localhost:8888/heros',
            list:{},
        }
    },
    methods:{
        //获取对应id 的数据,并渲染数据到页面
        getListDataByID(){
            axios.get(this.url+'/'+this.id)
            .then(res=>{
                this.list = res.data
            })
        },
        //修改英雄数据
        editHero(){
            axios.put(this.url+'/'+this.list.id,{
                name:this.list.name,
                gender:this.list.gender
            }).then(res=>{
                alert('修改成功!')
                //更改之后重新回到/herolist路由
                this.$router.push('/herolist')
            })
        }
    },
    mounted(){
        //页面一加载就获取id,并赋值给data里面的id
        this.id = this.$route.params.id
        this. getListDataByID()
    }

}
</script>

<style>

</style>


