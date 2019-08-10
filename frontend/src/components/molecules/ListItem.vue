<template>
  <div class="list-item" @click="$emit('click')">
    <font-awesome-icon
      v-if="iconLeft"
      :icon="iconLeft"
      class="icon-left"
    />
    <span>
      <slot/>
    </span>
    <font-awesome-icon
      v-if="iconRight"
      :icon="iconRight"
      class="icon-right"
    />
  </div>
</template>

<script>
  export default {
    props: ['iconLeft', 'iconRight']
  }
</script>

<style scoped lang="scss">
  .list-item {
    position: relative;
    border-radius: $border-radius;
    margin-bottom: .25rem;
    padding: .5rem 1rem;
    background: $primary-2;
    border: 2px solid $dark-neon-blue;

    &:hover {
      cursor: pointer;
      background: $primary-1;
      border-color: $primary-5;
    }

    > span {
      border-bottom: 1px solid $white;
    }

    > .icon-left {
      margin-right: 1rem;
    }

    > .icon-right {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translatey(-50%);
    }
  }
</style>
