# CSS 样式

## 1. 黑白图像

这段代码会让你的彩色照片显示为黑白照片，是不是很酷？

```css
img.desaturate {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
}
```

## 2. 使用 :not() 在菜单上应用/取消应用边框

先给每一个菜单项添加边框

```css
/* add border */
.nav li {
  border-right: 1px solid #666;
}
```

……然后再除去最后一个元素……

```css
/* remove border */
.nav li:last-child {
  border-right: none;
}
```

……可以直接使用 :not() 伪类来应用元素：

```css
.nav li:not(:last-child) {
  border-right: 1px solid #666;
}
```

这样代码就干净，易读，易于理解了。

当然，如果你的新元素有兄弟元素的话，也可以使用通用的兄弟选择符（~）：

```css
..nav li:first-child ~ li {
  border-left: 1px solid #666;
}
```

## 3. 页面顶部阴影

下面这个简单的 CSS3 代码片段可以给网页加上漂亮的顶部阴影效果：

```css
body:before {
  content: "";
  position: fixed;
  top: -10px;
  left: 0;
  width: 100%;
  height: 10px;
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  z-index: 100;
}
```

## 4. 给 body 添加行高

你不需要分别添加 line-height 到每个 p,h 标记等。只要添加到 body 即可：

```css
body {
  line-height: 1;
}
```

这样文本元素就可以很容易地从 body 继承。

## 5. 所有一切都垂直居中

要将所有元素垂直居中，太简单了：

```css
html,
body {
  height: 100%;
  margin: 0;
}
body {
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-flex;
  display: flex;
}
```

看，是不是很简单。

注意：在 IE11 中要小心 flexbox。

## 6. 逗号分隔的列表

让 HTML 列表项看上去像一个真正的，用逗号分隔的列表：

```css
ul > li:not(:last-child)::after {
  content: ",";
}
```

对最后一个列表项使用 :not() 伪类。

## 7. 使用负的 nth-child 选择项目

在 CSS 中使用负的 nth-child 选择项目 1 到项目 n。

```css
li {
  display: none;
} /* select items 1 through 3 and display them */
li:nth-child(-n + 3) {
  display: block;
}
```

## 8. 对图标使用 SVG

我们没有理由不对图标使用 SVG：

```css
.logo {
  background: url("logo.svg");
}
```

SVG 对所有的分辨率类型都具有良好的扩展性，并支持所有浏览器都回归到 IE9。这样可以避开.png、.jpg 或.gif 文件了。

## 9. 优化显示文本

有时，字体并不能在所有设备上都达到最佳的显示，所以可以让设备浏览器来帮助你：

```css
html {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
```

注：请负责任地使用 optimizeLegibility。此外，IE /Edge 没有 text-rendering 支持。

## 10. 对纯 CSS 滑块使用 max-height

使用 max-height 和溢出隐藏来实现只有 CSS 的滑块：

```css
.slider ul {
  max-height: 0;
  overlow: hidden;
}
.slider:hover ul {
  max-height: 1000px;
  transition: 0.3s ease;
}
```

## 11. 继承 box-sizing

让 box-sizing 继承 html：

```css
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
```

这样在插件或杠杆其他行为的其他组件中就能更容易地改变 box-sizing 了。

## 12. 表格单元格等宽

表格工作起来很麻烦，所以务必尽量使用 table-layout: fixed 来保持单元格的等宽：

```css
.calendar {
  table-layout: fixed;
}
```

## 13. 用 Flexbox 摆脱外边距的各种 hack

当需要用到列分隔符时，通过 flexbox 的 space-between 属性，你就可以摆脱 nth-，first-，和 last-child 的 hack 了：

```css
.list {
  display: flex;
  justify-content: space-between;
}
.list .person {
  flex-basis: 23%;
}
```

现在，列表分隔符就会在均匀间隔的位置出现。

## 14. 使用属性选择器用于空链接

当 a 元素没有文本值，但 href 属性有链接的时候显示链接：

```css
a[href^="http"]:empty::before {
  content: attr(href);
}
```

相当方便。

## 15. 检测鼠标双击

HTML：

```html
<div class="test3">
  <span
    ><input type="text" value=" " readonly="true" />
    <a href="http://renpingjun.com">Double click me</a></span
  >
</div>
```

CSS：

```css
.test3 span {
  position: relative;
}
.test3 span a {
  position: relative;
  z-index: 2;
}
.test3 span a:hover,
.test3 span a:active {
  z-index: 4;
}
.test3 span input {
  background: transparent;
  border: 0;
  cursor: pointer;
  position: absolute;
  top: -1px;
  left: 0;
  width: 101%; /* Hacky */
  height: 301%; /* Hacky */
  z-index: 3;
}
.test3 span input:focus {
  background: transparent;
  border: 0;
  z-index: 1;
}
```

## 16. CSS 写出三角形

```css
/* create an arrow that points up */
div.arrow-up {
  width: 0px;
  height: 0px;
  border-left: 5px solid transparent; /* left arrow slant */
  border-right: 5px solid transparent; /* right arrow slant */
  border-bottom: 5px solid #2f2f2f; /* bottom, add background color here */
  font-size: 0px;
  line-height: 0px;
} /* create an arrow that points down */
div.arrow-down {
  width: 0px;
  height: 0px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #2f2f2f;
  font-size: 0px;
  line-height: 0px;
} /* create an arrow that points left */
div.arrow-left {
  width: 0px;
  height: 0px;
  border-bottom: 5px solid transparent; /* left arrow slant */
  border-top: 5px solid transparent; /* right arrow slant */
  border-right: 5px solid #2f2f2f; /* bottom, add background color here */
  font-size: 0px;
  line-height: 0px;
} /* create an arrow that points right */
div.arrow-right {
  width: 0px;
  height: 0px;
  border-bottom: 5px solid transparent; /* left arrow slant */
  border-top: 5px solid transparent; /* right arrow slant */
  border-left: 5px solid #2f2f2f; /* bottom, add background color here */
  font-size: 0px;
  line-height: 0px;
}
```

## 17. CSS3 calc() 的使用

calc() 用法类似于函数，能够给元素设置动态的值：

```css
/* basic calc */
.simpleBlock {
  width: calc(100% - 100px);
} /* calc in calc */
.complexBlock {
  width: calc(100% - 50% / 3);
  padding: 5px calc(3% - 2px);
  margin-left: calc(10% + 10px);
}
```

## 18. 文本渐变

文本渐变效果很流行，使用 CSS3 能够很简单就实现：

```css
h2[data-text] {
  position: relative;
}
h2[data-text]::after {
  content: attr(data-text);
  z-index: 10;
  color: #e3e3e3;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0)),
    color-stop(50%, rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
}
```

## 19. 禁用鼠标事件

CSS3 新增的 pointer-events 让你能够禁用元素的鼠标事件，例如，一个连接如果设置了下面的样式就无法点击了。

```css
.disabled {
  pointer-events: none;
}
```

## 20. 模糊文本

简单但很漂亮的文本模糊效果，简单又好看！

```css
.blur {
  color: transparent;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
```
