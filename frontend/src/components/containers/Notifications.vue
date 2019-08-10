<template>
  <fade-up-transition>
    <div
      v-if="userMessage"
      :class="`notification notification-${userMessageType}`"
    >
      <div class="notification-header">
        <a
          href="javascript:void(0);"
          @click="clear"
        >
          <font-awesome-icon icon="times-circle"/>
        </a>
        <span>
          <font-awesome-icon icon="exclamation-triangle"/>
          error
        </span>
      </div>
      <div class="notification-body">
        {{ userMessage }}
      </div>
    </div>
  </fade-up-transition>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {
        timeout: undefined
      }
    },
    computed: {
      ...mapState( 'notifications', {
        userMessage: state => state.userMessage,
        userMessageType: state => state.userMessageType
      })
    },
    methods: {
      ...mapActions('notifications', {
        clear: 'CLEAR'
      })
    },
    watch: {
      '$route' (toRoute, fromRoute) {
        this.clear()
      },
      'userMessage' (newMessage) {
        clearTimeout(this.timeout)
        if(newMessage.length)
          this.timeout = setTimeout(() => this.clear(), 8000)
      }
    }
  }
</script>

<style scoped lang="scss">
  .notification {
    border-radius: $border-radius;
    background: $white;

    > .notification-header {
      border-radius: $border-radius;
      padding: .25rem 0;
      position: relative;
      text-align: center;
      color: $white;
      font-weight: bold;
      background: darken($danger, 12%);
      border-bottom: 1px solid $white;

      > a {
        position: absolute;
        left: .5rem;
        top: 50%;
        transform: translatey(-50%)
      }
    }

    > .notification-body {
      text-align: center;
      padding: 1rem;
    }

    a {
      color: $white;
    }

    &.notification-error {
      color: $white;
      background: $danger;
    }
  }
</style>
