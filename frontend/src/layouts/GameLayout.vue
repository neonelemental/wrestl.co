<template>
  <div class="game-template">
    <nav-bar>
      <search-input
        v-model="searchQuery"
        label="Search"
        :searching="searching"
        placeholder="Search for wrestlers, promotions, etc..."
      />
    </nav-bar>
    <div class="side-bar-template">
      <side-bar>
        <side-bar-link :to="{name: 'dashboard'}" icon="project-diagram">
          Dashboard
        </side-bar-link>
        <side-bar-link :to="{name: 'feuds/index'}" icon="fire">
          Feuds
        </side-bar-link>
        <side-bar-link :to="{name: 'roster/index'}" icon="users">
          Roster
        </side-bar-link>
        <side-bar-link :to="{name:'talent/index'}" icon="search-dollar">
          Talent
        </side-bar-link>
        <side-bar-link :to="{name: 'calendar/index'}" icon="calendar-alt">
          Calendar
        </side-bar-link>
        <side-bar-link :to="{name: 'gossip/index'}" icon="comments">
          Gossip
        </side-bar-link>
      </side-bar>

      <main>
        <notifications/>
        <div class="container-fluid">
          <search-results
            v-if="searchQuery.length"
            :results-promise="resultsPromise"
            :search-query="searchQuery"
            @clearSearch="searchQuery = ''"
          />
          <slot v-else/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import SearchApi from "@api/SearchApi";

  export default {
    data(){
      return {
        searchQuery: '',
        searching: false,
      }
    },
    computed: {
      resultsPromise () {
        this.searching = true
        return new SearchApi()
          .search(this.searchQuery)
          .finally(() => this.searching = false)
      }
    }
  }
</script>

<style scoped lang="scss">
  .game-template {
    height: 100%;

    .side-bar-template {
      display: flex;
      flex-direction: row;
      flex: 1;
      height: calc(100% - #{$navbar-height});

      > .side-bar {
        flex: 2;
      }

      > main {
        color: $text-color;
        background: darken($neon-blue, 18%);
        display: flex;
        flex: 8;
        overflow: scroll;
      }
    }

  }
</style>
