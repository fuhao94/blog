<template>
  <!--RGBA转16进制-->
  <div>
    <div class="wp">
      <label>rgba转16进制</label>
      <input ref="inputRef" type="text" />
      <button @click="hexify">转换</button>
      <span>{{ value }}</span>
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
      }
    }
  };
</script>

<style scoped>

</style>
