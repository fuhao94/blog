// import App from './App';

let store = new Vuex.Store({
    state: {
        count: 0
    }
}, Vue);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
