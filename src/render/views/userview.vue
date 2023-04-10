<template>
  <div id="user_container">
    <p>hahahahah</p><el-button type="primary" @click="testClick">主要按钮</el-button>
    <p>hahahahah</p><el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script>
import { ApiRequest } from '@/api';
export default {
  methods:{
    testClick(){
      ApiRequest(1).then(function(response){
        console.log("then func")
        console.log(response)
      })
    }
  }
}
</script>

<style>

</style>