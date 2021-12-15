/*
Vue.js:一套用于构建用户界面的渐进式框架
特点：
声明式渲染:采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统，在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数；
数据双向绑定:
组件化：
*/


/*
Vue 实例：每个 Vue 应用都是用 Vue 函数创建一个Vue 实例；虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发，因此在文档中经常会使用 vm表示 Vue 实例
data 对象中的所有的 property 加入到 Vue 的响应式系统中(只有当实例被创建时就已经存在于 data 中的 property 才是响应式的，新property不具备响应式)
*/
var vm = new Vue({
  // 选项对象
})


/*
生命周期：
new Vue() 创建Vue实例、初始化事件和生命周期
beforeCreate 
created 
*/


/*
指令：
带有 v- 前缀的特殊 attribute，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
示例：v-bind（接收一个参数，响应式更新，缩写为：）、v-model（双向绑定）、v-for、v-if、v-on（监听事件，缩写为@）
<a v-bind:href="url">...</a>  <a :href="url">...</a>
<a v-on:click="doSomething">...</a>   <a @click="doSomething">...</a>

修饰符：
以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定
示例：.prevent（告诉 v-on 指令对于触发的事件调用 event.preventDefault()）
<form v-on:submit.prevent="onSubmit">...</form>

计算属性computed：
计算复杂逻辑，以声明式创建依赖关系，基于它们的响应式依赖进行缓存的,当依赖改变时，则重新计算；否则使用缓存的值
计算属性默认只有 getter，不过在需要时你也可以提供一个 setter

侦听器：
观察和响应 Vue 实例上的数据变动
*/
// 当this.message变化才会重新计算
computed: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('') // `this` 指向 vm 实例
  }
}
// 只计算一次，不再更新
computed: {
  now: function () {
    return Date.now()
  }
}
// 重新渲染则会重新计算
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}

computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {// 运行 vm.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会相应地被更新
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}


/*
Class 与 Style 绑定(可传入字符串、对象、数组）
*/
<div v-bind:class="{ active: isActive }"></div>  // active 这个 class 存在与否将取决于数据 property isActive
<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div> // 传入多个class，也可以与普通的 class attribute 共存
<div v-bind:class="classObject"></div>  // 可将class提取放在data、computed中
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div> 
<div v-bind:class="[{ active: isActive }, errorClass]"></div>  // 数组语法中也可以使用对象语法

<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
data: {
  activeColor: 'red',
  fontSize: 30
}

<div v-bind:style="styleObject"></div>
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}


/*
v-if/v-else/v-else-if 条件渲染
v-if 是一个指令，所以必须将它添加到一个元素上,此时可以把一个 <template> 元素当做不可见的包裹元素，并在上面使用 v-if。最终的渲染结果将不包含 <template> 元素
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>

v-show
元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS property display。
v-show 不支持 <template> 元素，也不支持 v-else

v-if vs v-show区别：
v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
v-if 是惰性的，如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块；v-show 不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
*/


/*
v-for 列表渲染
Vue使用v-for渲染的元素列表时，默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。
为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，可为每项提供一个唯一 key attribute（key为字符串或数值类型的值）
当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。这意味着 v-if 将分别重复运行于每个 v-for 循环中。

变更方法：会触发视图更新
push()、pop()、shift()、unshift()、splice()、sort()、reverse()

非变更方法：不会变更原始数组，而总是返回一个新数组；使用时可以用新数组替换旧数组
filter()、concat() 和 slice()
Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，使用新数组并不会丢弃现有 DOM 并重新渲染整个列表
*/