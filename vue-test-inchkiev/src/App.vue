<template>
  <div>
    <!-- <transition name="appearance" mode="out-in"></transition> -->
    <!-- преключение между страницамис помощью роута -->

    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
// import StartPage from './views/StartPage.vue'
export default {
  components: {
    // StartPage
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.appearance-enter-active {
  animation-delay: 4s;
  transition: all 0.3s ease;
}
.appearance-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.appearance-enter, .appearance-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
