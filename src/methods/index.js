import modal from './modal/modal'
import down from './down/down'

const methods = (Vue, config) => {
  Object.defineProperties(Vue.prototype, {
    $modal: {
      get: () => modal
    },
    $down: {
      get: () => down
    }
  })
}

export default methods
