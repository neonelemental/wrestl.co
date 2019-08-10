<template>
  <span :class="`badge badge-${bootstrapClass()}`">
    <slot/>
  </span>
</template>

<script>
  import bootstrapTheme from '@mixins/bootstrapTheme';

  export default {
    mixins: [ bootstrapTheme ]
  }
</script>

<style scoped lang="scss">
  .badge {
    padding: .3em .5em;
    border-radius: 50% !important;

    &.badge-light {
      color: $neon-blue;
      background: $white;
      border-color: $primary-2;
    }
  }
</style>
