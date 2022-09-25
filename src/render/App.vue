<template>
  <div id="app">
    <div class="container">
      <div class="navibar">
        <div class="usericon">
          <img src="@/render/assets/user.jpg" class="usericonimg">
        </div>
        <div class="menubar">
          <ul>
            <li v-for="(mod,index) in modules" :key="index" class="menumodel">
              <div class="naviitem">
                <!-- <img class="naviiconimg" :src=mod.imgpath> -->
                <i class="iconfont" :class=mod.fontname ></i>
                <!-- <iconfontVue></iconfontVue> -->
                <p>{{ mod.name }}</p>
              </div>
            </li>
          </ul>
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
    // flex-grow: 1;
    position: relative;
    width:16rem;
    // display: flex;
    // flex-flow: column nowrap;
    // justify-content: space-between;
    // align-content: center;
    .menumodel {

      // height: 10rem;
      max-width: 100%;
      display: flex;
      flex-flow: column nowrap;
      position: relative;
      // border: #000000 solid 1px;
    }
  }
}

.menubar ul {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  justify-content: flex-start;
  // background-color: #000000;
}

.usericonimg {
  max-height: 50%;
  max-width: 50%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.naviiconimg {
  height: 50%;
  width: 50%;
}

.naviitem {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 10rem;
  width: 100%;
  margin: 0.2rem;
}
.naviitem:active{
  background: -webkit-linear-gradient(left,#15DCEA ,#538CFA);
  .iconfont{
    background: white;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.naviitem:hover{
  border-radius: 1.2rem;
  transform: translate(-2px);
  // background: -webkit-linear-gradient(left,#15DCEA ,#538CFA);
  background-color: rgba($color: gray, $alpha: 0.2)
}
.menumodel p {
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
}
.iconfont{
  font-size: 3.6rem !important;
  background: -webkit-linear-gradient(left ,#15DCEA ,#538CFA );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.views {
  background-color: #9400FF;
  flex-grow: 1;
  flex-basis: 16rem;
}

</style>

<script>
export default {
  data() {
    return {
      modules: [
        {
          name: "用户管理",
          fontname:"iconfont icon-yonghuguanli"
        },
        {
          name: "产品管理",
          fontname:"iconfont icon-chanpinguanli"
        },
        {
          name: "动作管理",
          fontname:"iconfont icon-dongzuoguanli"
        },
        {
          name: "审计管理",
          fontname:"iconfont icon-shenjiguanli"
        },
        {
          name: "人员管理",
          fontname:"iconfont icon-renyuanguanli"
        },
        {
          name: "系统设置",
          fontname:"iconfont icon-xitongshezhi"
        }
      ]
    }
  },
  components:{

  }
}
</script>

