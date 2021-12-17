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

    <h2>声明 JavaScript 钩子</h2>
    <div>
      <button @click="show2 = !show2">
        Toggle
      </button>
      <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
        <p v-if="show2">
          Demo
        </p>
      </transition>
    </div>

    <h2>多个元素的过渡</h2>
    <div>
      <transition name="fade" mode="out-in">
        <button v-bind:key="isEditing" @click="isEditing = !isEditing">
          {{ isEditing ? 'Save' : 'Edit' }}
        </button>
      </transition>
    </div>

    <h2>多个组件的过渡</h2>
    <div>
      <button @click="switchCom">
        切换组件
      </button>
      <transition name="component-fade" mode="out-in">
        <component v-bind:is="view"></component>
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
        show2: false,
        isEditing: true,
        view: 'v-a'
      }
    },
    components: {
      'v-a': {
        template: '<div>Component A</div>'
      },
      'v-b': {
        template: '<div>Component B</div>'
      }
    },
    computed: {},
    watch: {},
    mounted() {},
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.transformOrigin = 'left'
      },
      enter: function (el, done) {
        Velocity(el, { // Velocity是一个实现动画的库，目前没安装
          opacity: 1,
          fontSize: '1.4em'
        }, {
          duration: 3000
        })
        Velocity(el, {
          fontSize: '1em'
        }, {
          complete: done
        })
      },
      leave: function (el, done) {
        Velocity(el, {
          translateX: '15px',
          rotateZ: '50deg'
        }, {
          duration: 6000
        })
        Velocity(el, {
          rotateZ: '100deg'
        }, {
          loop: 5
        })
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        }, {
          complete: done
        })
      },
      switchCom(){
        this.view = (this.view == 'v-a') ? 'v-b' : 'v-a'
      }
    }
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
    transform: translateX(100px);
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


  .fade-enter-active {
    transition: all .3s ease;
    /* all表示所有变化的属性，可特指一个如opacity */
  }

  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .fade-enter,
  .fade-leave-to {
    transform: translateX(100px);
    opacity: 0;
  }


  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity .3s ease;
  }

  .component-fade-enter,
  .component-fade-leave-to{
    opacity: 0;
  }
</style>