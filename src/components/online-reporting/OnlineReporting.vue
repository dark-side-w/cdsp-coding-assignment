<template>
  <section class="online-reporting standard-padding">
    <div class="btn-wrapper">
      <b-btn
        squared
        variant="black"
        class="btn-bold"
      >
        Create a new matter
      </b-btn>
    </div>
    <div class="table-wrapper">
      <DxDataGrid
        :data-source="items"
        :remote-operations="false"
        :allow-column-reordering="true"
        :row-alternation-enabled="true"
        :show-borders="true"
        class="item-table"
      >
        <DxPaging :page-size="pageSize" />
      </DxDataGrid>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { DxColumn, DxDataGrid, DxHeaderFilter, DxPaging, DxScrolling, DxSelection, DxSorting } from 'devextreme-vue/data-grid'

const pageSize = 10

export default {
  name: "OnlineReporting",
  components: { DxDataGrid, DxPaging },
  data () {
    return {
      pageSize: pageSize
    }
  },
  computed: {
    ...mapState('main', ['items', 'loadingItems', 'users', 'loadingUsers']),
  },
  async mounted () {
    await Promise.all([
      this.$store.dispatch('main/fetchItems', 1),
      this.$store.dispatch('main/fetchUsers'),
    ])
  },
}
</script>

<style lang="scss" scoped>
.btn-wrapper {
  margin-bottom: 60px;
}
</style>
