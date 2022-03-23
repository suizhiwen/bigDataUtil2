import Vue from 'vue'
import modalTemplate from './modalTemplate.vue'

export default function modal(option, fn) {
  // const Modal = Vue.extend(modalTemplate)
  // const modal = new Modal()
  // modal.$mount()
  // document.body.appendChild(modal.$el)
  const modal = new Vue({
    render (h) {
        return h(modalTemplate, {
          props: {
            option,
            fn
          }
        })
    }
  })
  // modal.$mount('#app') // 这样子做会把#app下所有的内容都替换
  modal.$mount()
  document.body.appendChild(modal.$el)
}
