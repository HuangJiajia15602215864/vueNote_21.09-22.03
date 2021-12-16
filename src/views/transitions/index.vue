<template>
  <div class="transitions">
    <h2>CSS过渡</h2>
    <div>
      <button @click="show = !show">
        Toggle render
      </button>
      <transition name="slide-fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
    <img src="@/assets/img/transitions.png">

    <h2>CSS动画</h2>
    <div>
      <button @click="show1 = !show1">
        Toggle render
      </button>
      <transition name="bounce">
        <p v-if="show1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at
          lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        show: true,
        show1: true,
      }
    },
    computed: {},
    watch: {},
    mounted() {},
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
    /* all表示所有变化的属性，可特指一个如opacity */
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }


  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(1);
    }
  }
</style>