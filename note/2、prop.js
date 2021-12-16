/*
prop

单向数据流:
父级 prop 的更新会向下流动到子组件中，但是反过来则不行，防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。
每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。
试图变更一个 prop 的方法：
1、定义子组件的data并将prop 用作其初始值
2、定义子组件的计算属性并将prop进行计算
注：JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变变更这个对象或数组本身将会影响到父组件的状态。
*/
props: ['initialCounter'],
data: function () {
  return {
    counter: this.initialCounter
  }
}

props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}


/*
Prop 验证
Prop属性校验可以用字符串（指定类型）、数组（支持多种类型）、对象（指定类型type、是否必传required、默认值default、验证函数validator）
type类型：String、Number、Boolean、Array、Object、Date、Function、Symbol
注：1、prop 会在一个组件实例创建之前进行验证，所以实例的 property (如 data、computed 等) 在 default 或 validator 函数中是不可用的。
    2、基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    3、type 还可以是一个自定义的构造函数，并且通过 instanceof 来进行检查确认
*/
Vue.component('my-component', {
  props: {
    propA: Number,// 字符串（指定类型）
    propB: [String, Number],// 数组（支持多种类型）
    propC: {
      type: String,
      required: true,// 必填的字符串
      default: '100'// 带有默认值
    }, 
    propD: {
      type: Object,
      default: function () {// 带有默认值的对象，对象或数组默认值必须从一个工厂函数获取
        return { message: 'hello' }
      }
    },   
    propE: {
      validator: function (value) {// 自定义验证函数
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})

function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
Vue.component('blog-post', {
  props: {
    author: Person
  }
})


/*
非 Prop 的 Attribute:
传向一个组件，但是该组件并没有相应 prop 定义的 attribute。组件可以接受任意的 attribute，而这些 attribute 会被添加到这个组件的根元素上。
class 和 style attribute 会将两边的值合并起来，从而得到最终的值。
*/