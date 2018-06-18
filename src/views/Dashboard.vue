<template>
  <div class="dashboard">
    <div class="dashboard__items">
      <draggable v-model="dashboardItems">
          <transition-group>
            <DashboardItem
              class="dashboard__item"
              v-for="item in dashboardItems"
              :key="item.id"
              :itemId="item.id"
              :height="item.height"
            />
          </transition-group>
      </draggable>
      <div class="dashboard__add-item" @click="addDashboardItem">+ Add item</div>
    </div>
  </div>
</template>

<script>
import DashboardItem from '@/components/DashboardItem.vue'
import draggable from 'vuedraggable'

export default {
  state: {
    dashboardItems: [],
    dashboardCurrentId: ''
  },
  computed: {
    dashboardCurrentId () {
      return Number(this.$store.getters.getDashbordCounterId + 1)
    },
    /**
     * Draggable Dashboard items functionality.
     */
    dashboardItems: {
      /**
       * Get Dashboard items form Vuex store.
       */
      get () {
        return this.$store.getters.getDashbordItems
      },
      /**
       * Set changed Dashboard items to Vuex store.
       * @param {object} dashboardItems
       *   Changed Dashboard items data.
       */
      set (dashboardItems) {
        this.$store.dispatch('updateDashboardItems', dashboardItems)
      }
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
    DashboardItem,
    draggable
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
      cursor: move;
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
