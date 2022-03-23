import Click from './click'
import Exposure from './exposure'

// 实例化
const exp = new Exposure()
const cli = new Click()

// Vue.directive('track', {
//   bind(el, binding) {
//     const { arg } = binding
//     arg.split('|').forEach(item => {
//       // 点击
//       if (item === 'click') {
//         cli.add({ el })
//       } else if (item === 'exposure') {
//         exp.add({ el })
//       }
//     })
//   }
// })

export default {
  name: 'track',
  bind(el, binding) {
    const { arg } = binding
    console.log(binding, '-------');
    arg.split('|').forEach(item => {
      // 点击
      if (item === 'click') {
        cli.add({ el })
      } else if (item === 'exposure') {
        exp.add({ el })
      }
    })
  }
}

