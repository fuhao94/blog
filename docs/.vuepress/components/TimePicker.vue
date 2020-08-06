<template>
    <table class="time_table table" v-on:mouseleave="mouseleave">
        <thead>
        <tr>
            <th rowspan="2">日期/时间</th>
        </tr>
        <tr>
            <th class="unselectable" v-for="num in numData">{{num}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(options,index) in timeData">
            <th scope="row">{{options.date}}</th>
            <td @click="onClick(index,key)" :class="[{ 'active_select': timeItem.isSelected}]"
                v-for="(timeItem,key) in options.time"
                v-on:mousedown="mousedown(index,key)" v-on:mouseover="mouseover(index,key)" v-on:mouseup="mouseup"></td>
        </tr>
        </tbody>
    </table>
</template>

<script>
  export default {
    name: 'TimePicker',
    data: function () {
      return {
        numData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        timeData: [],
        selectFlag: false, //当参数为true时，mouseover事件生效
        max: {
          x: 0,
          y: 0
        }
      }
    },

    mounted() {
      const data = [];

      for (let i = 1; i < 11; i++) {
        const item = {
          date: i,
          time: [{
            isSelected: false,
            value: i
          }, {
            isSelected: false,
            value: i + 1
          }, {
            isSelected: false,
            value: i + 2
          }, {
            isSelected: false,
            value: i + 3
          }, {
            isSelected: false,
            value: i + 4
          }, {
            isSelected: false,
            value: i + 5
          },]
        }
        data.push(item)
      }

      this.timeData = data;
    },

    methods: {
      mousedown: function (index, key) {
        this.selectStart = [];
        this.selectFlag = true;
        if (!this.timeData[index].time[key].value) {
          if (this.timeData[index].time[key].isSelected) {
            this.timeData[index].time[key].isSelected = false;
          } else {
            this.$set(this.timeData[index].time[key], "isSelected", true);
          }
        }
        this.selectStart.push({
          index: index,
          key: key
        });
      },
      mouseover: function (index, key) {
        // x 垂直方向  y 水平方向
        if (this.selectFlag) {
          if (index >= this.max.x) {
            this.max.x = index;
          }
          if (key >= this.max.y) {
            this.max.y = key;
          }
          var start = {
            x: this.selectStart[0].index,
            y: this.selectStart[0].key
          };
          var end = {
            x: index,
            y: key
          };
          for (var i = end.x; i <= this.max.x; i++) {
            for (var j = end.y; j <= this.max.y; j++) {
              this.$set(this.timeData[i].time[j], "isSelected", false);
            }
          }
          /* 渲染选中的区域 */
          for (var i = start.x; i <= end.x; i++) {
            for (var j = start.y; j <= end.y; j++) {
              this.$set(this.timeData[i].time[j], "isSelected", true);
            }
          }

        }
      },
      onClick(index, key) {
        this.$set(this.timeData[index].time[key], "isSelected", !this.timeData[index].time[key].isSelected);
      },
      mouseup: function () {
        this.selectFlag = false;
        this.max = {
          x: 0,
          y: 0
        }
      },
      mouseleave: function () {
        this.selectFlag = false;
      }
    }
  }
</script>

<style>
    .time_table {
        border: 1px solid #ccc;
        border-collapse: collapse;
    }

    .time_table th, .time_table td {
        border: 1px solid #ccc;
        width: 30px;
        height: 40px;
    }

    .active_select {
        background: cornflowerblue;
    }
</style>