<template>
    <!--JS相关面试题-->
    <div class="javascript">
        <!--自增加1-->
        <div class="increase">
            <button @click="onIncrease">执行</button>
            <span>i = {{ increase }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "i-center",

    data() {
    	return {
			increase: 0
        }
    },

    methods: {
		onIncrease() {
			this.increase++;
        }
    }
};
</script>

<style scoped>

</style>
