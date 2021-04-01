<template>
    <!--垂直居中-->
    <div class="wp">
        <div class="box size">123123</div>
    </div>
</template>

<script>
export default {
    name: "CssCenter"
};
</script>

<style scoped>
.wp {
    border: 1px solid red;
    width: 300px;
    height: 300px;
    position: relative;
}
.box {
    background: green;
    position: absolute;;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.box.size{
    width: 100px;
    height: 100px;
}
</style>
