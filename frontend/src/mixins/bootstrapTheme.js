export default {
  props: {
    content: String,
    primary: Boolean,
    danger: Boolean,
    info: Boolean,
    warning: Boolean,
    light: Boolean,
  },
  data () {
    return {
      bootstrapTheme: {
        'primary': {
          className: 'primary',
          iconName: '',
        },
        'danger': {
          className: 'danger',
          iconName: ''
        },
        'info': {
          className: 'info',
          iconName: '',
        },
        'warning': {
          className: 'warning',
          iconName: '',
        },
        'light': {
          className: 'light',
          iconName: '',
        },
      }
    }
  },
  methods: {
    bootstrapClassByString (string) {
      return {

      }[string] || 'primary'
    },
    bootstrapClass () {
      if(this.primary) return 'primary';
      if(this.danger) return 'danger';
      if(this.info) return 'info';
      if(this.warning) return 'warning';
      if(this.light) return 'light';
      else return 'primary';
    },
    bootstrapIconByString (string) {

    }
  },
}
