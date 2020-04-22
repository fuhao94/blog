<template>
    <img src="../image/javascript.png" alt="javascript" />
</template>

<script>
    export default {
        name: "z-button",

        props: {
            label: {
                type: String,
                default: '按钮'
            }
        }
    };
</script>

<style>
    img {
        width: 80px;
        height: 80px;
    }
</style>
