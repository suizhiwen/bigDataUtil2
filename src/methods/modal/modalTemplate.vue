<template>
  <Modal
    v-model="isShow"
    :title="option.title || ''"
    :mask-closable="false"
    :class="option.class"
    :width="option.width || '45%'"
    @on-visible-change="resetFields"
  >
    <div slot="footer">
      <Button type="default" @click="cancel">{{
        lan ? "cancel" : "取消"
      }}</Button>
      <Button v-if="fn" type="primary" @click="confirm">{{
        lan ? "ok" : "确定"
      }}</Button>
    </div>
    <div id="modal-content" ref="content" class="content"></div>
  </Modal>
</template>

<script>
import Vue from "vue";
export default {
  components: {},
  props: {
    option: {
      type: Object,
      default() {
        return {};
      },
    },
    fn: {
      type: Function,
    },
  },
  data() {
    return {
      isShow: true,
      tpl: {},
      lan: localStorage.getItem("lan") === "en",
    };
  },
  mounted() {
    let option = this.option;
    this.$nextTick(() => {
      // 第一种
      // this.tpl = new Vue(option.tpl);
      // this.tpl.$mount("#modal-content");
      // 第二种
      let Ctor = Vue.extend(option.tpl);
      this.tpl = new Ctor();
      this.el = this.tpl.$mount().$el;
      this.$refs.content.appendChild(this.el);
    });
  },
  methods: {
    resetFields() {},
    cancel() {
      this.isShow = false;
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    confirm() {
      this.fn(this.tpl, this.cancel);
    },
  },
};
</script>

<style>
</style>