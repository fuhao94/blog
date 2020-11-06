// import App from './App';
import { vuexInit } from './store'

function install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
        beforeCreate: vuexInit
    })
}

let store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        getStatePlusOne(state) {
            return state.count + 1
        }
    }

}, Vue);

new Vue({
    el: '#app',
    store,
    render: h => h(App),
});
