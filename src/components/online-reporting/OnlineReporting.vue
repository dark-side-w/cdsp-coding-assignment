<template>
  <section class="online-reporting standard-padding">
    <div class="btn-wrapper">
      <b-btn
        squared
        variant="black"
        class="btn-bold"
        @click="$router.push('/form')"
      >
        Create a new matter
      </b-btn>
    </div>
    <div class="table-wrapper">
      <DxDataGrid
        :data-source="items"
        :remote-operations="false"
        :row-alternation-enabled="true"
        :show-row-lines="false"
        :show-borders="false"
        :show-column-lines="false"
        class="item-table"
        :selection="{ mode: 'single' }"
      >
        <DxPaging :page-size="pageSize" />
        <DxColumn
          data-field="Id"
          caption="ID"
          :width="30"
          data-type="string"
        />
        <DxColumn
          data-field="Status"
          caption="Status"
          :width="80"
        />

        <DxColumn
          data-field="RequestName"
          caption="Request name"
          :width="100"
        />

        <DxColumn
          data-field="Requestor"
          caption="Requesto"
          data-type="string"
          :width="70"
        />

        <DxColumn
          data-field="GoodEnding"
          caption="Good ending"
          data-type="string"
          :width="90"
        />

        <DxColumn
          data-field="NeedStoryteller"
          caption="Need storyteller"
          :width="100"
        />

        <DxColumn
          data-field="Storyteller"
          caption="Storyteller"
          :width="70"
          data-type="string"
        />

        <DxColumn
          data-field="WantedCharacters"
          caption="Wanted characters"
          :width="150"
        />

        <DxColumn
          :calculate-cell-value="getTime"
          caption="Deadline"
          data-type="date"
          :width="150"
        />

        <DxColumn
          data-field="Budget"
          caption="Budget"
          data-type="string"
          :width="70"
        />

        <DxColumn
          data-field="Description"
          caption="Description"
        />
        <dx-column
          :calculate-cell-value="getEmail"
          caption="Author"
          :width="150"
        />

        <dx-column
          cell-template="buttonsTemplate"
          :width="65"
        />

        <div
          slot="buttonsTemplate"
          slot-scope="{ data }"
        >
          <b-btn
            squared
            variant="transparent-small"
            @click="openItem($event, data)"
          >
            OPEN
          </b-btn>
        </div>
      </DxDataGrid>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { DxColumn, DxDataGrid, DxHeaderFilter, DxPaging, DxScrolling, DxSelection, DxSorting } from 'devextreme-vue/data-grid'
import moment from 'moment'

const pageSize = 10

export default {
  name: "OnlineReporting",
  components: { DxDataGrid, DxPaging, DxColumn },
  data () {
    return {
      pageSize: pageSize,
      selectedRow: null
    }
  },
  computed: {
    ...mapState('main', ['items', 'loadingItems', 'users', 'loadingUsers']),
  },
  async mounted () {
    await Promise.all([
      this.$store.dispatch('main/fetchItems'),
      this.$store.dispatch('main/fetchUsers'),
    ])
  },
  methods: {
    openItem (event, data) {
      this.$router.push({ path: '/form', query: { id: data.row.data.Id } })
    },
    getEmail (data) {
      if (this.items && this.users) {
        const user = this.users.find(user => user.Id === data.Requestor)

        if (user) {
          return user.Email
        }
      }
    },
    getTime (data) {
      if (this.items) {
        return moment(data.Deadline).format("DD MMM YYYY | hh:mm a")
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.btn-wrapper {
  margin-bottom: 60px;
}
</style>
