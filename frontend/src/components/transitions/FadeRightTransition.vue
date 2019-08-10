<template>
  <transition name="fade-right">
    <slot/>
  </transition>
</template>

<style scoped lang="scss">
  .fade-right-enter-active, .fade-right-leave-active {
    transition: all 500ms ease;
  }
  .fade-right-enter, .fade-right-leave-to {
    opacity: 0;
  }

  .fade-right-enter {
    transform: translatey(-1rem);
  }

  .fade-right-leave-to {
    transform: translatey(1rem);
  }
</style>
