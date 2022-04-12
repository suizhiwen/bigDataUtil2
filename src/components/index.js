import bigTree from "./bigTree/bigTree.vue";
import tablePage from './tablePage/tablePage'
import formMaker from './formMaker/formMaker.js'
import lay from './lay/lay.vue';


export default (Vue) => {

  Vue.component('bigTree', bigTree)
  Vue.component('lay', lay)
  Vue.component('formMaker', formMaker)
  Vue.component('tablePage', tablePage)
}
