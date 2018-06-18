<template>
  <el-card
    class="box-card dashboard-item"
    :style="{height: height + 'px'}">
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
</template>

<script>
export default {
  props: ['itemId', 'height'],
  methods: {
    /**
     * Delete item from dashboard items.
     * @param {integer} id
     *  Current id.
     */
    deleteDashboardItem: function (id) {
      this.$store.dispatch('deleteDashboardCounterId', Number(id))
    }
  }
}
</script>

<style scoped lang="scss">

  .dashboard-item {
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
