<template>
  <div class="online-reporting-details standard-padding">
    <p>Online reporting details</p>
    <pre>{{ item }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "OnlineReportingDetails",
  data () {
    return {
      itemId: this.$route.query.id,
    }
  },
  computed: {
    ...mapState('main', ['item', 'loadingItem']),
  },
  async mounted () {
    await this.$store.dispatch('main/fetchItem', this.itemId)
  },
}
</script>

<style lang="scss" scoped>
</style>
