import modal from './modal/modal'

const methods = (Vue, config) => {
  Object.defineProperties(Vue.prototype, {
    $modal: {
      get: () => modal
    }
  })
}

export default methods
