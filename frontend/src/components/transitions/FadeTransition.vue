<template>
  <transition name="fade">
    <slot/>
  </transition>
</template>

<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity 200ms;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
