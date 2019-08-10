<template>
  <nav class="navbar _p3">
    <router-link class="text-3 navbar-brand brand-font" :to="{name: 'dashboard'}">
      <span class="_pb2 _pt2">
        WRESTL.CO
      </span>
    </router-link>
    <slot/>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
  }
</script>

<style scoped lang="scss">
  .navbar {
    border-bottom: 2px solid $dark-neon-blue;
    background-color: $neon-blue;
  }

  .navbar-brand {
    border: 1px solid $white;
    padding: .5rem;
    border-radius: $border-radius;
    color: $white !important;

    > span {
      border-top: 1px solid $white;
      border-bottom: 1px solid $white;
    }
  }
</style>
