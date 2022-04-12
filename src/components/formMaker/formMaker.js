import renderUtil from "./renderUtil"
import { isFunction } from "../../common/common"
// formOptions: {
//   inline: true,
//   formData: {},
//   formItems: [{
//     type: 'select',
//     key: 'value',
//     on: {
//       click () {

//       }
//     }
//   }]
// },

export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  render(h) {
    const formData = this.options.formData
    const formItems = this.options.formItems || []
    console.log(1)
    let formItemsComponents = formItems.map(formItemOption => {
      let component = renderUtil[formItemOption.type](h, formItemOption, formData, this)
      let formItem = renderUtil.formItem(h, formItemOption, formData, component)
      return formItem
      // let col = renderUtil.col(h, formItemOption, formItem)
      // return col
    })

    // return h('Form', {  // 有row
    //   ref: 'form',
    //   props: {
    //     model: this.options.formData,
    //     labelWidth: this.options.labelWidth || 0,
    //     inline: this.options.inline || false,
    //     ...this.options.formProps
    //   }
    // },[h('Row', {}, formItemsComponents)])
    return h('Form', {
      ref: 'form',
      props: {
        model: this.options.formData,
        labelWidth: this.options.labelWidth || 0,
        inline: this.options.inline || false,
        ...this.options.formProps
      }
    }, [formItemsComponents])
  },
  methods: {
    validate () {
      let flag = false
      this.$refs.form.validate(rs => {
        if(rs) {
          flag = true  
        }
      })
      return flag 
    },
    resetFields () {
      this.$refs["form"].resetFields()
    }
  }
}
