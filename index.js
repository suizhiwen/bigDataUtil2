import iView from "view-design";
import Vue from "vue";
import bigTree from "./src/components/bigTree/bigTree.vue";
import lay from './src/components/lay/lay.vue';
import track from "./src/directive/trackSDK/index";
import methods from './src/methods/index';
Vue.use(iView)

export default {
    install (Vue, config) {
        methods(Vue, config)
        Vue.directive(track.name, track)

        Vue.component('bigTree', bigTree)
        Vue.component('lay', lay)
    }
}
