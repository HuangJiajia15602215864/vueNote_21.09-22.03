<template>
  <div>
    <button v-copy="copyText">复制</button>
    <button v-longpress="longpress">长按</button>
    <button v-debounce="debounceClick">防抖</button>
    <div v-waterMarker="{text:'lzg版权所有',textColor:'rgba(180, 180, 180, 0.4)'}" class="water-marker"></div>
    <!-- 显示 -->
    <button v-permission="'1'">权限按钮1</button>
    <!-- 不显示 -->
    <button v-permission="'10'">权限按钮2</button>
    <input v-input-filter:price v-model="testValue">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        copyText: 'a copy directives',
        testValue:''
      }
    },
    methods: {
      longpress() {
        alert('长按指令生效')
      },
      debounceClick() {
        console.log('只触发一次')
      }
    }
  }
</script>
<style>
  .water-marker {
    border: 1px solid red;
    width: 500px;
    height: 500px;
  }
</style>