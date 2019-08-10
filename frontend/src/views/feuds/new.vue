<template>
  <page-title>
    add a new feud?
    <template slot="actions">
      <router-link :to="{name: 'feuds/index' }" class="btn btn-primary btn-sm">
        <font-awesome-icon icon="times-circle"/>
        cancel
      </router-link>

      <promise-button
        light
        @click="create"
        :promise="createPromise"
        icon="save"
        class="btn-sm"
      >
        save
      </promise-button>
    </template>
  </page-title>
</template>

<script>
  export default {
    data () {
      return {
        createPromise: undefined
      }
    },
    methods: {
      create() {
        this.createPromise = this.$store.dispatch('feuds/CREATE', {})
      }
    }
  }
</script>

