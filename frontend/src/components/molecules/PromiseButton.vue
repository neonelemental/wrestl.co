<template>
  <button
    ref="button"
    :data-content="errorMessage"
    :class="`btn btn-${bootstrapClass()}`"
    @click="$emit('click')"
    :style="styleObject"
    data-trigger="manual"
    :disabled=" resolving ? 'disabled' : undefined "
  >
    <font-awesome-icon
      v-if="resolving"
      icon="spinner"
      pulse
    />
    <template v-else>
      <font-awesome-icon v-if="icon" :icon="icon"/>
      <slot/>
    </template>
  </button>
</template>

<script>
  import bootstrapTheme from '@mixins/bootstrapTheme';
  import promiseable from '@mixins/promiseable';

  export default {
    mixins: [bootstrapTheme, promiseable],
    props: ['icon'],
    data() {
      return {
        styleObject: {},
      }
    },
    mounted() {
      this.styleObject.minWidth = `${this.$refs.button.offsetWidth}px`
    },
    watch: {
      'error' (isError) {
        if(isError)
          this.$store.dispatch('notifications/ERROR', this.errorMessage)
      }
    },
  }
</script>
