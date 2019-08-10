<template>
  <promise-view class="row" :promise="$fetchablePromises">
    <page-title>
      feuds
      <template slot="actions">
        <router-link class="btn btn-primary btn-sm" :to="{ name: 'feuds/new' }">
          <font-awesome-icon icon="plus-circle"/>
          new feud
        </router-link>
        <router-link class="btn btn-primary btn-sm" :to="{ name: 'feuds/index', query: { all: true }}">
          <font-awesome-icon icon="globe-americas"/>
          all feuds
        </router-link>
      </template>
    </page-title>
  </promise-view>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    computed: {
      fetchers() {
        return [
          {
            namespace: 'feuds',
            action: 'INDEX',
          }
        ]
      },
      ...mapState('feuds', {
        feuds: state => state.feuds
      })
    },
  }
</script>
