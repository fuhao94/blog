<template>
    <ul>
        <li>
            <img src="../image/javascript.png" alt="javascript" @click="onRedirect('js')" />
        </li>
        <li>
            <img src="../image/css.png" alt="javascript" @click="onRedirect('css')" />
        </li>
        <li>
            <img src="../image/vue.png" alt="javascript" @click="onRedirect('vue')" />
        </li>
    </ul>
</template>

<script>
import ZButton from './z-button';

export default {
    name: "z-home",

    components: {
        ZButton
    },

    methods: {
        onRedirect(route) {
            switch (route) {
                case 'js':
                    window.location = '/blog/note/js/let和const命令';
                    break;
                case 'css':
                    window.location = '/blog/note/css/选择器';
                    break;
                case 'vue':
                    window.location = '/blog/note/vue/双向绑定/双向绑定';
                    break;
            }

        }
    }
};
</script>

<style scoped>
    ul {
        display: flex;
        flex-flow: row wrap;
    }

    li {
        flex-basis: 33%;
        list-style: none;
    }

    img {
        display: block;
        margin: 0 auto;
        width: 120px;
        height: 120px;
        transition: box-shadow .3s;
        cursor: pointer;
    }

    img:hover {
        box-shadow: 0 4px 10px 0 rgba(0,0,0,.1)
    }
</style>
