---
title: HTML&CSS
date: 2021-03-23
---

# HTML

# CSS

## 垂直居中

```html
<div class="wp">
    <div class="box size">123123</div>
</div>

<style>
.wp {
    border: 1px solid red;
    width: 300px;
    height: 300px;
}

.box {
    background: green;    
}

.box.size{
    width: 100px;
    height: 100px;
}
</style>
```

<CssCenter />

### 定宽高适用

**absolute + 负margin**

```css
.wp {
    position: relative;
}
.box {
    position: absolute;;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
}
```

**absolute + margin auto**

```css
.wp {
    position: relative;
}
.box {
    position: absolute;;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

```

**absolute + calc**

```css
.wp {
    position: relative;
}
.box {
    position: absolute;;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
}
```


### 不定宽高

**absolute + transform**

```css
.wp {
    position: relative;
}
.box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

**line-height**

```css
/* 定位代码 */
.wp {
    line-height: 300px;
    text-align: center;
    font-size: 0;
}
.box {
    font-size: 16px;
    display: inline-block;
    vertical-align: middle;
    line-height: initial;
    text-align: left; /* 修正文字 */
}
```

**flex**

```css
.wp {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

**grid**

```css
.wp {
    display: grid;
}
.box {
    align-self: center;
    justify-self: center;
}
```


## BFC

概念：块级格式化上下文，它会创建一个特殊的作用域，在这个作用域中，只有 block box(display: block、list-item、table的元素)参与布局；BFC 的特点和规则
规定了在这个特殊区域中如何进行布局，如何进行定位，区域内元素的相互关系和相互作用是怎样的。这个特殊区域不受外界影响。
