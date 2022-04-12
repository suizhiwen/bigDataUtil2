import { getTypeName, isEn } from "../../common/common"
export default {
  formItem: generateFormItem,
  select: generateSelect,
  input: generateInput,
  date: generateDatePicker,
  inputNumber: generateInputNumber,
  switch: generateSwitch,
  col: generateCol,
}
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

function generateSelect(h, formItem, formData, vm) {
  const list = formItem.list || []
  const props = formItem.props || {}
  const labelName = formItem.labelName || 'label'
  const valueName = formItem.valueName || 'value'
  let optionList = list.map(item => {
    return h('Option', {
      props: {
        value: item[valueName],
        key: item[valueName]
      }
    }, item[labelName])
  })
  return h('Select', {
    props: {
      value: formItem.key && formData[formItem.key],
      filterable: props.filterable || true,
      clearable: props.clearable || true,
      ...props
    },
    on: {
      ...mapBindFn(formItem.on, vm),
      input(value) {
        formItem.key && (formData[formItem.key] = value)
      }
    }
  }, [optionList])
}

function generateInput(h, formItem, formData, vm) {
  let props = formItem.props || {}
  return h('Input', {
    props: {
      value: formItem.key && formData[formItem.key],
      clearable: props.clearable || true,
      ...props
    },
    on: {
      ...mapBindFn(formItem.on, vm),
      input(value) {
        formItem.key && (formData[formItem.key] = value)
      }
    }
  })
}

function generateInputNumber(h, formItem, formData, vm) {
  let props = formItem.props || {}
  return h('InputNumber', {
    props: {
      value: formItem.key && formData[formItem.key],
      clearable: props.clearable || true,
      ...props
    },
    style: {
      width: '100%'
    },
    on: {
      ...mapBindFn(formItem.on, vm),
      input(value) {
        formItem.key && (formData[formItem.key] = value)
      }
    }
  })
}

function generateSwitch(h, formItem, formData, vm) {
  let props = formItem.props || {}
  return h('i-switch', {
    props: {
      value: formItem.key && formData[formItem.key],
      ...props
    },
    on: {
      ...mapBindFn(formItem.on, vm),
      input(value) {
        formItem.key && (formData[formItem.key] = value)
      }
    }
  })
}

function generateDatePicker(h, formItem, formData, vm) {
  let props = formItem.props || {}
  return h('DatePicker', {
    props: {
      value: formItem.key && formData[formItem.key],
      clearable: props.clearable || true,
      ...props
    },
    style: {
      width: '100%'
    },
    on: {
      ...mapBindFn(formItem.on, vm),
      input(value) {
        // formItem.key && (formData[formItem.key] = value) 
      },
      'on-change'(value) {
        let changeFn = mapBindFn(formItem.on, vm)['on-change']
        changeFn && changeFn(value)
        formItem.key && (formData[formItem.key] = value) // 由于date类型需要格式化
      }
    }
  })
}

function generateFormItem(h, formItem, formData, component) {// Field Cannot Be Empty
  let msg = isEn ? 'Field Cannot Be Empty' : '参数不允许为空'
  let valueType = formItem.type === 'inputNumber' ? 'number' : getTypeName(formItem.key && formData[formItem.key]) // 根据值获取类型
  if(valueType === 'null') {
    valueType = formItem.valueType
  }
  console.log(valueType)
  let defaultRules = { required: true, type: valueType || 'string', message: msg, trigger: 'submit' }
  return h('FormItem', {
    props: {
      prop: formItem.key,
      label: formItem.label || '',
      labelWidth: formItem.labelWidth || 0,
      rules: formItem.rules || (formItem.require ? defaultRules : {})
    },
    style: {
      width: '100%',
      ...formItem.style
    }
  }, [component])
}

function generateCol(h, formItem, component) {
  return h('Col', {
    props: {
      span: formItem.span || 24
    }
  }, [component])
}

function mapBindFn(fnObj, vm) {
  let obj = {}
  for (let event in fnObj) {
    obj[event] = fnObj[event].bind(vm.$parent)
  }
  return obj
}
