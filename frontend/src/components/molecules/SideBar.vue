<template>
  <fade-right-transition>
    <div class="side-bar">
      <slot/>
    </div>
  </fade-right-transition>
</template>

<style scoped lang="scss">
  .side-bar {
    padding-top: 1rem;
    padding-right: 1rem;
    height: 100%;
    border-right: 2px solid $dark-neon-blue;
    background: darken($neon-blue, 9%);
  }
</style>
