<template>
  <div class="dashboard">
    <div class="dashboard__items">
      <DashboardItem
        class="dashboard__item"
        v-for="item in dashboardItems"
        :key="item.id"
        :itemId="item.id"
        :height="item.height"
      />
      <div class="dashboard__add-item" @click="addDashboardItem">+ Add item</div>
    </div>
  </div>
</template>

<script>
import DashboardItem from '@/components/DashboardItem.vue'

export default {
  state: {
    dashboardItems: [],
    dashboardCurrentId: ''
  },
  computed: {
    dashboardItems () {
      return this.$store.getters.getDashbordItems
    },
    dashboardCurrentId () {
      return Number(this.$store.getters.getDashbordCounterId + 1)
    }
  },
  methods: {
    /**
     * Add new item to dashboard items.
     */
    addDashboardItem: function () {
      let item = {
        id: this.dashboardCurrentId,
        height: 100,
        weight: 4
      }
      // Update Dashboard counter id.
      this.$store.dispatch('updateDashboardCounterId', this.dashboardCurrentId)
      // Add item to Dashboard items.
      this.$store.dispatch('addDashboardItem', item)
    }
  },
  components: {
    DashboardItem
  }
}
</script>

<style scoped lang="scss">
  .dashboard {
    &__items {
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
    }

    &__item {
      margin-bottom: 30px;
    }

    &__add-item {
      border: 1px solid #409EFF;
      color: #409EFF;
      padding: 24px 0;
      text-align: center;
      transition: .4s all;
      cursor: pointer;

      &:hover {
        opacity: .6;
      }
    }
  }
</style>
