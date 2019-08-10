<template>
  <span class="d-flex badge badge-light _ml3" @click="$emit('click')">
    <font-awesome-icon icon="times-circle"/>
    <p class="m-0 ml-1">
      <slot/>
    </p>
  </span>
</template>

<style scoped lang="scss">
  .badge {
    background: $white;

    &:hover {
      cursor: pointer;
    }
  }
</style>
