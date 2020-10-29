<template>
  <!--RGBA转16进制-->
  <div>
    <div class="wp">
      <label>rgba转16进制</label>
      <input type="text" ref="inputRef"/>
      <button @click="hexify">转换</button>
      <template v-if="value">
        <span ref="copyRef">{{ value }}</span>
        <button @click="copy">复制</button>
        <span :style="{backgroundColor: `${value}`}" class="active"/>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HexifyTool",

    data() {
      return {
        value: ''
      }
    },

    methods: {
      hexify() {
        const color = this.$refs.inputRef.value;
        const values = color
          .replace(/rgba?\(/, '')
          .replace(/\)/, '')
          .replace(/[\s+]/g, '')
          .split(',');
        const a = parseFloat(values[3] || 1),
          r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
          g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
          b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
        this.value = "#" +
          ("0" + r.toString(16)).slice(-2) +
          ("0" + g.toString(16)).slice(-2) +
          ("0" + b.toString(16)).slice(-2);
      },

      copy() {
        const val = this.$refs.copyRef;
        window.getSelection().selectAllChildren(val);
        document.execCommand("Copy");
      }
    }
  };
</script>

<style scoped>
  .active {
    display: inline-block;
    width: 30px;
    height: 30px;
  }
</style>
