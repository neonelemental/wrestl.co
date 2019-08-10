<template>
  <div class="list">
    <p>
      <badge light class="category-count">
        {{ listItems.length }}
      </badge>
      {{ listName }}
    </p>
    <list-item
      v-for="(item, i) in listItems"
      :icon-left="listItemIconLeft"
      :icon-right="listItemIconRight"
      @click="$emit('click', item)"
    >{{ item.label || item[labelKey] }}</list-item>
  </div>
</template>

<script>
  export default {
    props: {
      listItems: {
        type: Array,
        default: [],
      },
      listName: {
        type: String,
      },
      listItemIconLeft: {
        type: String
      },
      listItemIconRight: {
        type: String
      },
      labelKey: {
        type: String,
      }
    }
  }
</script>

<style scoped lang="scss">
  .list {
    > p {
      font-family: $brand-font;
      text-transform: uppercase;
      margin-bottom: .5rem;
      padding-bottom: .5rem;
      width: 100%;
      border-bottom: 1px solid $white;
    }
    .category-count {
      border: 2px solid $primary-5;
    }
  }
</style>
