<template>
  <div class="table-ande-page">
    <div class="table-wrapper" ref="tableRef">
      <Table
          width="100%"
          ref="selection"
          :height="height? height : tableHeight - top"
          stripe
          @on-sort-change="sortChange"
          :columns="columns"
          :data="tableData">
      </Table>
    </div>

        <div class='no-page-number-table-wrap' style="margin-top: 10px;text-align: right;">
          <Page v-if="tableData.length"
                :class-name="isNoPage? 'no-page-number' : ''"
                :total="pageInfo.total"
                :page-size="pageInfo.pageSize"
                :page-size-opts="pageSizeOpts"
                :current="pageInfo.current"
                @on-page-size-change="pageSizeChange"
                @on-change="onChange"
                show-total
                :show-sizer="Boolean(pageInfo.pageSize)"></Page>
          <!-- <div v-show="isNoPage && tableData.length" class='current-page'>{{$t('当前第')}}{{pageInfo.current}}{{$t('页')}}</div> -->
        </div>
  </div>
</template>

<script>
export default {
  name: 'tableAndPage',
  props: {
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    top: {
      type: Number,
      default: 65
    },
    isNoPage: {
      type: Boolean
    },
    height: {
      type: Number
    },
    tableData: {
      type: Array,
      default () {
        return []
      }
    },
    pageSizeOpts: {
      type: Array,
      default () {
        return [20, 30, 50, 100]
      }
    },
    pageInfo: {
      type: Object,
      default () {
        return {
          total: 0,
          current: 1,
          pageSize: 20
        }
      }
    }

  },
  data () {
    return {
      tableHeight: 951
    }
  },
  mounted () {
    this.tableHeight = document.documentElement.clientHeight - 200
  },
  methods: {
    getSelection (key = 'id') {
      const allSelect = this.$refs.selection.getSelection()
      const idsArr = allSelect.map((item) => {
        return item[key]
      })
      return idsArr.join(',')
    },
    sortChange (data) {
      this.$emit('sortChange', data)
    },
    onSelect (selection, row) {
      this.$emit('on-select', selection, row)
    },
    pageSizeChange (pageSize) {
      this.pageInfo.pageSize = pageSize
      // 当pageNo为1是才须主动调用getList方法，否则当pageSize发生改变时，会触发pageNo改变,则会触发pageSize的change方法
      if (this.pageInfo.current === 1) {
        this.onChange()
      }
    },
    onChange (pageNo) {
      console.log(pageNo)
      this.$emit('onChange', pageNo)
    }
  }
}
</script>

<style lang=less>
.table-ande-page {
  .ivu-btn-text {
    color: #F16622;
  }
  .ivu-table-cell {
    text-overflow: clip;
  }
}
.no-page-number {
  .ivu-page-item {
    display: none;
  }
  .ivu-page-item-jump-next {
    display: none;
  }
  .ivu-page-item-jump-prev {
    display: none;
  }
}
.no-page-number-table-wrap {
  position: relative;
  .current-page {
    position: absolute;
    right: 340px;
    top: 7px;
  }
}
</style>
