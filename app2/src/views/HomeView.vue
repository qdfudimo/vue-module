<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="handelClick">点击</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <hellow></hellow>
    <!-- <remoteTopbar></remoteTopbar> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      show: false
    }
  },
  components: {
    HelloWorld,
    hellow: () => import("app_two/AppContainer"),
    // remoteTopbar: () => import('remote_two/MyTopbar'),
  },
  methods: {
    handelClick() {
      this.show = true
      import("app_two/tools").then(res=>{
        console.log(res.default(1,2));
      })
    }
  }
}
</script>
