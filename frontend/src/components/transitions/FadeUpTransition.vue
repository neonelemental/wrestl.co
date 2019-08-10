<template>
  <transition name="fade-up">
    <slot/>
  </transition>
</template>

<style scoped lang="scss">
  .fade-up-enter-active, .fade-up-leave-active {
    transition: all 500ms ease;
  }
  .fade-up-enter, .fade-up-leave-to {
    opacity: 0;
  }

  .fade-up-enter {
    transform: translatey(-1rem);
  }

  .fade-up-leave-to {
    transform: translatey(1rem);
  }
</style>
