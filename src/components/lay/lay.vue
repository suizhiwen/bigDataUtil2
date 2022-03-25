<template>
  <div
    class="l-lay-warp"
    :class="{
      '--scroll': scroll,
      '--block': block,
      '--column': column,
      '--center': center,
      '--vcenter': vcenter,
      '--hcenter': hcenter,
      '--left': left,
      '--right': right,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    block: Boolean,
    center: Boolean,
    vcenter: Boolean, // 垂直居中
    hcenter: Boolean, // 水平居中
    column: Boolean,
    scroll: Boolean,
    left: Boolean,
    right: Boolean,
  },
  mounted() {
    console.log(this.$slots);
    console.log(this.column);
  },
};
</script>

<style>
.w100 {
  width: 100%;
}
</style>
<style scoped>
/* 水平 horizontal 垂直 vertical */


/* 基础样式 */
.l-lay-warp {
  /* height: 100%; */
  display: flex;
}
.--block {
   display: block !important;
}
.--center {
  justify-content: center;
  align-items: center;
}
.--vcenter {
  align-items: center;
}
.--hcenter {
  justify-content: center;
}
.--column {
  height: 100%;
  flex-direction: column;
}
.--scroll {
  display: block !important;
  flex: 1;
  overflow: auto;
}
/* 左右布局样式 */
.l-lay-left {
  margin-right: auto;
}
.l-lay-right {
  margin-left: auto;
}
.--left {
  margin-right: auto;
}
.--right {
  margin-left: auto;
}
/* 基础布局样式 */
.l-lay-warp[flex1] {
  flex: 1;
}
.l-lay-warp[flex2] {
  flex: 2;
}
.l-lay-warp[flex3] {
  flex: 3;
}
.l-lay-warp[flex4] {
  flex: 4;
}
.l-lay-warp[flex5] {
  flex: 5;
}
.l-lay-warp[flex6] {
  flex: 6;
}
.l-lay-warp[flex7] {
  flex: 7;
}
.l-lay-warp[flex8] {
  flex: 8;
}
.l-lay-warp[flex9] {
  flex: 9;
}
</style>