<template>
  <div class="samplel">
    sample1 普通flex布局
      <div style="margin-bottom: 20px">
        <lay>
          <lay flex1>1</lay>
          <lay flex2>2</lay>
          <lay flex3>3</lay>
          <lay flex4>4</lay>
        </lay>
      </div>
 sample2 居中布局 center  vcenter hcenter
      <div style="margin-bottom: 20px; height: 50px">
        <lay center>
          <div>asdfsadf</div>
        </lay>
      </div>

 sample3 普通左右布局
     
        <div style="margin-bottom: 20px; height: 50px">
        <lay>
          <lay left>left</lay>
          <lay right>right</lay>
        </lay>
      </div>

 sample4 左侧固定宽度，右侧自适应
        <div style="margin-bottom: 20px; height: 50px">
        <lay>
          <lay style="width: 100px" left>left</lay>
          <lay flex1>right</lay>
        </lay>
      </div>

 <div style="margin-bottom: 20px; height: 50px">
        <lay>
          <lay flex1>left</lay>
          <lay style="width: 100px">right</lay>
        </lay>
      </div>

 <div style="margin-bottom: 20px; height: 50px">
        <lay>
           <lay style="width: 100px">right</lay>
          <lay flex1>center</lay>
          <lay style="width: 100px">right</lay>
        </lay>
      </div>

    sample5 手机布局，上下固定，中间撑满并滚动
     <div style="margin-bottom: 20px;">
        <lay style="height: 200px" column>
          <lay>
            left
          </lay>
          <lay scroll>
            <div>
              <p>主体</p>
              <p>主体</p>
              <p>主体</p>
              <p>主体</p>
              <p>主体</p>
              <p>主体</p>
              <p>主体</p>
              <p>主体</p>
              <p>主体</p>
              <p>主体</p>
              <p>主体</p>
              <p>主体</p>
              <p>主体</p>
            </div>
          </lay>
          <lay>
            <div>left</div>
          </lay>
        </lay>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>