import Vue from 'vue'
import modalTemplate from './modalTemplate.vue'
// import tablePage from '../../components/tablePage/tablePage.vue'
// import formMaker from '../../components/formMaker/formMaker'
// Vue.component('tablePage', tablePage)
// Vue.component('formMaker', formMaker)

export default function modal(option, fn) {
  // 第一种
  const Modal = Vue.extend(modalTemplate)
  const modal = new Modal({
    propsData: {
      option,
      fn
    }
  })
  modal.$mount()
  document.body.appendChild(modal.$el)

  // 第二种
  // const modal = new Vue({
  //   render (h) {
  //       return h(modalTemplate, {
  //         props: {
  //           option,
  //           fn
  //         }
  //       })
  //   }
  // })
  // // modal.$mount('#app') // 这样子做会把#app下所有的内容都替换
  // modal.$mount()
  // document.body.appendChild(modal.$el)
}
