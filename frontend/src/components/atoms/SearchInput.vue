<template>
  <div>
    <font-awesome-icon
      :class="{'search-icon': true, searching }"
      :icon="searchIcon"
      :pulse="searching"
      @click="value.length ? clearAndFocus() : focusInput()"
    />
    <label for="search-input" aria-label="search-input">
      {{ label }}
    </label>
    <input
      autocomplete="off"
      @keydown.esc="updateValue('')"
      ref="input"
      id="search-input"
      v-bind="$attrs"
      :value="value"
      :placeholder="placeholder"
      @input="(e) => updateValue(e.target.value)"
    />
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    name: 'search-input',
    props: {
      searching: Boolean,
      value: String,
      label: String,
      placeholder: String,
      timeoutLength: {
        type: Number,
        default: 500,
      },
    },
    data () {
      return {
        timeout: null,
      }
    },
    computed: {
      searchIcon () {
        if(this.searching) return 'spinner';
        else if(this.value.length) return 'times-circle';
        else return 'search';
      }
    },
    methods: {
      clearAndFocus() {
        this.updateValue('')
        this.focusInput()
      },
      focusInput () {
        this.$refs.input.focus()
      },
      updateValue(value) {
        // Clear any timeouts that were set before.
        clearTimeout(this.timeout)

        // Emit input value immediately if the search field is cleared
        // (either by user or programmatically).
        if(!value.length) this.$emit('input', value)

        // Otherwise, debounce the input and emit the value to give the user some time to type.
        else {
          this.timeout = setTimeout(() => {
            this.$emit('input', value)
          }, this.timeoutLength)
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  $search-icon-left: 5px;
  $search-icon-width: 24px;

  div {
    border-radius: $border-radius;
    position: relative;
    display: flex;
    flex: 1;
    padding: .25rem 0 .25rem calc(#{$search-icon-left} + #{$search-icon-width});
    background: $white;

    label {
      display: none;
    }

    .search-icon {
      &.searching {
        margin-top: -7px;
      }

      cursor: pointer;
      font-size: .8rem;
      top: 50%;
      transform: translatey(-50%);
      position: absolute;
      left: $search-icon-left;
      width: $search-icon-width;
    }

    input {
      background: transparent;
      border: none;
      outline: none;
      width: 100%;
    }
  }
</style>
