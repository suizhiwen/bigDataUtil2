<template>
  <div
    class="l-lay-warp"
    :class="{ 'l-column': $slots.header || $slots.footer }"
  >
    <div class="l-lay-content" v-if="$slots.default">
      <slot></slot>
    </div>


   <!-- 普通左右布局,left和right单独用， 和content分开-->
    <div class="l-leftAndRight-wrap"  v-if="$slots.left || $slots.right">
      <div class="l-lay-left" v-if="$slots.left">
        <slot name="left"></slot>
      </div>

      <div class="l-lay-right" v-if="$slots.right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['column', 'scroll'],
  mounted() {
    console.log(this.$slots);
  },
};
</script>

<style>
.w100 {
  width: 100%
}

</style>

<style scoped>
.l-lay-warp[block] > .l-lay-content {
  display: block;
}
.l-lay-warp[scroll] {
  overflow: auto;
  flex: 1
}
.l-lay-warp[scroll] > .l-lay-content {
  display: block;
}
.l-lay-warp[column] {
  height: 100%;
}
.l-lay-warp[column] > .l-lay-content {
  flex-direction: column;
}

.l-leftAndRight-wrap {
  display: flex;
}
.l-lay-warp[center] > .l-lay-content {
  justify-content: center;
  align-items: center;
}
/* 水平 horizontal 垂直 vertical */
.l-lay-warp[hcenter] > .l-lay-content {
  justify-content: center;
}
.l-lay-warp[vcenter] > .l-lay-content {
  align-items: center;
}

.l-lay-left {
  margin-right: auto;
}
.l-lay-right {
  margin-left: auto;
}
.l-lay-content {
  width: 100%;
  height: 100%;
  display: flex;
}
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