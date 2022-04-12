<template>
  <div>
    <formMaker ref="formMaker" :options="formOptions"></formMaker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formOptions: {
        inline: true,
        // labelWidth: 100,
        formData: {
          selectValue: "小面包车",
          selectValue2: ["中货车"],
          inputValue: "",
          datePickerValue: "",
          inputNumberValue: 100,
          switchValue: true,
        },
        formItems: [
          {
            require: true,
            type: "select",
            key: "selectValue",
            labelName: "carTypeName",
            valueName: "carTypeName",
            list: [],
            style: {
              width: "50%",
            },
            props: {
              filterable: true,
            },
            on: {
              "on-change"(value) {
                console.log(value);
              },
            },
          },
          {
            require: true,
            type: "select",
            valueType: "number",
            key: "selectValue2",
            labelName: "carTypeName",
            valueName: "carTypeName",
            list: [],
            style: {
              width: "50%",
            },
            props: {
              filterable: true,
              multiple: true,
            },
            on: {
              "on-change"(value) {
                console.log(this.formOptions);
              },
            },
          },
          {
            require: true,
            type: "input",
            key: "inputValue",
            style: {
              width: "20%",
            },
            props: {
              placeholder: "sadfasdf",
            },
          },
          {
            require: true,
            type: "inputNumber",
            key: "inputNumberValue",
            style: {
              width: "20%",
            },
            props: {
              placeholder: "sadfasdf",
            },
          },
          {
            require: true,
            type: "switch",
            key: "switchValue",
            style: {
              width: "20%",
            },
            props: {},
          },
          {
            require: true,
            type: "date",
            label: "review start date",
            labelWidth: 120,
            key: "datePickerValue",
            style: {
              width: "20%",
            },
            props: {
              placeholder: "生效时间",
              format: "yyyy/MM/dd",
              type: "daterange",
            },
            on: {
              "on-change"(value) {
                console.log(value);
                console.log(this);
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>