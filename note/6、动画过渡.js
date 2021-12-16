/*
(例子transition)
CSS过渡:
Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡:
条件渲染 (使用 v-if)
条件展示 (使用 v-show)
动态组件
组件根节点
<transition name="fade">
  <p v-if="show">hello</p>
</transition>

过渡的类名（ 6 个 class 切换）：
v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
v-enter-to：定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
v-leave-to：定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。

使用一个没有名字的 <transition>，则 v- 是这些类名的默认前缀；使用了 <transition name="my-transition">，那么 v-enter 会替换为 my-transition-enter。
v-enter-active 和 v-leave-active 可以控制进入/离开过渡的不同的缓和曲线
*/


/*
CSS动画:
animation和@keyframes
*/


/*
自定义过渡的类名:优先级高于普通的类名，可结合第三方 CSS 动画库，如 Animate.css
enter-class
enter-active-class
enter-to-class (2.1.8+)
leave-class
leave-active-class
leave-to-class (2.1.8+)
*/

