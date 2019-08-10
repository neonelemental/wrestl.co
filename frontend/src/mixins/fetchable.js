export default {
  created () {
    this._fetch()
  },
  watch: {
    '$route' (to, from) {
      this._fetch()
    },
  },
  methods: {
    _fetch () {
      let fetchers = this.fetchers || []
      this.$fetchablePromises = fetchers.map(
        fetcher => this._getFetchedPromise(fetcher)
      )
    },
     _getFetchedPromise (fetcher) {
      return this.$store.dispatch(
        `${fetcher.namespace}/${fetcher.action}`,
        fetcher.options,
        fetcher.config
      )
    },
  }
}
