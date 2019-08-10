<template>
  <promise-view
    class="search-results"
    error-message="Something went wrong while attempting to search."
    :promise="resultsPromise"
    v-model="results"
  >
    <fade-transition>
      <h4
        v-if="!resultsCategories.length"
        class="no-results"
      >
        No results found for {{searchQuery}}
      </h4>
    </fade-transition>

    <fade-transition>
      <div v-if="resultsCategories.length">
        <div class="d-flex mb-4">
          <h6 class="_m0">
            results for
          </h6>
          <tag @click="$emit('clearSearch')">
            {{ searchQuery }}
          </tag>
        </div>

        <list
          v-for="(category, i) in resultsCategories"
          class="mb-4"
          :list-name="category.name"
          :list-items="category.results"
          list-item-icon-left="user-circle"
          list-item-icon-right="chevron-circle-right"
          label-key="text"
          @click="handleClick"
        />
      </div>
    </fade-transition>
  </promise-view>
</template>

<script>
  export default {
    props: {
      resultsPromise: Promise,
      searchQuery: String,
    },
    data() {
      return {
        results: {}
      }
    },
    computed: {
      resultsCategories () {
        return Object
          .keys(this.results)
          .map( key => {
            return { name: key, results: this.results[key] }
          })
      }
    },
    methods: {
      handleClick (result) {
        console.log(result)
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-results {
    height: 100%;
    width: 100%;
    position: relative;

    .no-results {
      position: absolute;
      top: 33%;
      left: 50%;
      transform: translatey(-66%) translatex(-50%);
    }
  }
</style>
