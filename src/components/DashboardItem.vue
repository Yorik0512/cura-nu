/**
* @file
* Contains implementation of Dashboard item component.
*/
<template>
  <vue-resize-sensor style="width: 100%; height: 100%;" @resize="onResize" :debounce="0">
    <el-card
      class="box-card dashboard-item"
      :class="{ 'dashboard-item--resize-vertical': resize == `vertical`}"
      :style="dashboardItemStyles"
      ref="dashboardItem">
      <div slot="header" class="dashboard-item__header">
        <span class="dashboard-item__title">#{{itemId}}</span>
        <el-button
          class="dashboard-item__remove-btn"
          @click="deleteDashboardItem(itemId)"
        >Remove</el-button>
      </div>
      <div class="dashboard-item__content">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
      </div>
    </el-card>
  </vue-resize-sensor>
</template>

<script>
import VueResizeSensor from 'vueresizesensor'

export default {
  state: {
    dashboardItems: []
  },
  props: ['itemId', 'height', 'resize'],
  computed: {
    /**
     * Dashboard item styles.
     */
    dashboardItemStyles () {
      return {
        height: `${this.height}px`
      }
    }
  },
  methods: {
    /**
     * Element resize listener.
     * @param {number} width
     *  Changed element width.
     * @param {number} height
     *  Changed element height.
     */
    onResize: function ({width, height}) {
      const item = {
        id: Number(this.itemId),
        height: Number(height) - 2
      }
      setTimeout(function () { console.log(item) }, 3000)
      // this.$store.dispatch('updateDashboardItemHeight', item)
    },
    /**
     * Delete item from dashboard items.
     * @param {number} id
     *  Current id.
     */
    deleteDashboardItem: function (id) {
      this.$store.dispatch('deleteDashboardCounterId', Number(id))
    }
  },
  components: {
    [VueResizeSensor.name]: VueResizeSensor
  }
}
</script>

<style scoped lang="scss">

  .dashboard-item {
    &--resize-vertical {
      resize: vertical;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__title {
      font-weight: 500;
    }
  }
</style>
