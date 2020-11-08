<template>
    <!--太极图-->
    <div class="circle animated"></div>
</template>

<script>
	export default {
		name: "CssDiagram"
	};
</script>

<style scoped>
    .circle {
        position: relative;
        width: 0;
        height: 200px;
        margin: 100px auto;
        border-radius: 100px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        border-left: 100px solid #000;
        border-right: 100px solid #fff;
    }
    .circle::after {
        content: '';
        display: block;
        width: 50px;
        height: 50px;
        background-color: #fff;
        box-shadow:0 100px 0 #000;
        border-radius: 50px;
        position: absolute;
        top: 25px;
        left: -25px;
    }
    .circle::before {
        content: '';
        display: block;
        width: 100px;
        height: 100px;
        background-color: #000;
        box-shadow:0 100px 0 #fff;
        border-radius: 50px;
        position: absolute;
        left: -50px;
    }
    .animated {
        animation-name: round;
        animation-duration: 5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    @keyframes round {
        from { transform: rotate(0) }
        to { transform: rotate(360deg) }
    }
</style>