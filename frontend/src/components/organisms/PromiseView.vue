<template>
  <div class="promise-view col-lg-12">
    <fade-transition>
      <span v-if="resolving" class="promise-resolving">
        <loading-indicator/>
      </span>
      <div v-else-if="error" class="error-message">
        <font-awesome-icon icon="exclamation-triangle" class="warning-icon"/>
        <h4>
          {{errorMessage}}
        </h4>
      </div>
      <div v-else class="w-100">
        <slot/>
      </div>
    </fade-transition>
  </div>
</template>

<script>
  import promiseable from '@mixins/promiseable';

  export default {
    mixins: [promiseable]
  }
</script>

<style scoped lang="scss">
  .promise-view {
    height: 100%;
    width: 100%;
    position: relative;

    .promise-resolving,
    .error-message
    {
      @include center(33%);
    }

    .warning-icon {
      font-size: 2.75rem;
      margin-bottom: 2rem;
      color: $warning;
    }
  }
</style>
