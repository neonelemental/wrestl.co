<template>
  <div>
    <font-awesome-icon
      v-if="icon"
      :icon="icon"
      class="icon-left"
    />
    <router-link :to="to" :class="{'side-bar-link': true, 'active': active }">
      <span>
        <slot/>
      </span>

      <font-awesome-icon
        class="animated"
        icon="circle"
      />
    </router-link>
  </div>

</template>

<script>
  export default {
    props: ['to', 'icon'],
    computed: {
      active () {
        return this.$route.name.split('/')[0] === this.to.name.split('/')[0]
      }
    }
  }
</script>

<style scoped lang="scss">
  div {
    position: relative;

    > .icon-left {
      position: absolute;
      left: 1.125rem;
      z-index: 1;
      top: 50%;
      transform: translatey(-50%);
      color: $white;
    }
  }

  .side-bar-link {
    font-family: $brand-font;
    border-radius: $border-radius;
    position: relative;
    display: flex;
    flex: 1;
    color: $white;
    font-weight: bold;
    text-transform: lowercase;
    padding: .66rem 3.5rem;
    background: $neon-blue;
    border-top: 2px solid $primary-4;
    border-bottom: 2px solid $primary-4;
    border-right: 2px solid $primary-4;
    margin-bottom: .33rem;
    text-decoration: none;

    > span {
      border-bottom: 1px solid $white;
    }

    svg {
      opacity: 0;
      right: 1rem;
      position: absolute;
      top: 50%;
      transform: translatey(-50%);
      font-size: .25rem;
      color: $light-neon-blue;
    }

    &:hover,
    &.active
    {
      background: lighten($neon-blue, 3%);

      svg {
        opacity: 1;
      }
    }
  }
</style>
