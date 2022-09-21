<template>
  <div id="app">
    <div class="container">
      <div class="navibar">
        <div class="usericon">
          <img src="@/render/assets/user.jpg">
        </div>
        <div class="menubar">
          
          <menumodel v-for="model in modules" :key="model.name" :imgpath="model.imgpath"></menumodel>

        </div>
      </div>
      <div class="views">

      </div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  font-size: 10px;
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  position: absolute;
}

.container {
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  height: 100%;
  width: 100%;
}

.navibar {
  background-color: #eeeeee;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 12.8rem;
  color: #7f7f7f;

  .usericon {
    height: 8rem;
    // background-color: brown;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.05);

    img {
      border-radius: 50%;
    }
  }

  .menubar {
    // background-color: aqua;
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-flow: column nowrap;

    .menumodel {
      max-height: 6.4rem;
      min-height: 6.4rem;
      max-width: 100%;

      // background-color: aqua;
      img {
        max-height: 25%;
        max-width: 25%;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-25%, -25%);
      }
    }

    .menumodel:hover img {
      animation-name: modelhover;
      animation-duration: 0.1s;
      // animation-iteration-count: infinite;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    }
  }

  img {
    max-height: 50%;
    max-width: 50%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.views {
  background-color: #9400FF;
  flex-grow: 1;
  flex-basis: 16rem;
}

@keyframes modelhover {
  0% {
    transform: scale(1) translate(0, 0);
    background-color: aqua;
  }

  100% {
    transform: scale(2.3) translate(-25%, -25%);
    background-color: aqua;
  }
}
</style>

<script>
import menumodel from './compoents/menumodel.vue';

export default {
  data() {
    return {
      modules: [
        {
          name: "用户管理",
          imgpath:"./src/render/assets/navi-icon/用户管理.svg"
        },
        {
          name: "产品管理",
          imgpath:"./src/render/assets/navi-icon/产品管理.svg"
        },
        {
          name: "动作管理",
          imgpath:"./src/render/assets/navi-icon/动作管理.svg"
        },
        {
          name: "审计管理",
          imgpath:"./src/render/assets/navi-icon/审计管理.svg"
        },
        {
          name: "人员管理",
          imgpath:"./src/render/assets/navi-icon/人员管理.svg"
        },
        {
          name: "系统设置",
          imgpath:"./src/render/assets/navi-icon/系统设置.svg"
        }
      ]
    }
  },
  components:{
    menumodel
  }
}
</script>

