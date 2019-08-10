export default {
  props: {
    errorMessage: {
      type: String,
      default: 'Oops, something went wrong!'
    },
    promise: [Promise, Array]
  },
  data() {
    return {
      resolving: false,
      error: false,
    }
  },
  created() {
    this.handlePromises()
  },
  watch: {
    'promise' () {
      this.handlePromises()
    }
  },
  computed: {
    promises () {
      if(Array.isArray(this.promise)) return this.promise
      else return [this.promise]
    },
  },
  methods: {
    handlePromises() {
      if(!this.promise)
        return;

      this.resolving = true;
      this.error = false;

      Promise.all(this.promises)
        .then( values => {
          this.$emit('input', this.promises.length > 1 ? values : values[0]);
        })
        .catch(error => {
          console.error(error)
          this.error = true
        })
        .finally(() => this.resolving = false)
    }
  },
}
