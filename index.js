import iView from "view-design";
import Vue from "vue";
// import track from "./directive/trackSDK/index";
import components from './src/components/index'

import methods from './src/methods/index';
Vue.use(iView)

export default {
    install (Vue, config) {
  // Vue.directive(track.name, track)

        components(Vue)
        methods(Vue, config)

    }
}
