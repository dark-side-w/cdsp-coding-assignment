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
    <b-row>
      <b-col cols="6">
        <pre>{{ items }}</pre>
      </b-col>
      <b-col>
        <pre>{{ users }}</pre>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "OnlineReporting",
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
