<template>
  <div class="page-title">
    <h1>
      <slot/>
    </h1>
    <div class="actions">
      <slot name="actions"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .page-title {
    display: flex;
    flex-direction: row;
    flex: 1;
    padding-bottom: .5rem;
    border-bottom: 1px solid $white;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin: 0;
      justify-content: flex-start;
    }

    .actions {
      justify-content: flex-end;

      > *:not(:last-child) {
        margin-right: .5rem;
      }
    }
  }
</style>
