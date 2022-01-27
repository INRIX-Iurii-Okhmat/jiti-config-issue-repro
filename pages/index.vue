<template>
  <div>
    {{ fromConfig }}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'IndexPage',

    computed: {
      fromConfig(): string {
        return this.$config.testProp;
      }
    }
  })
</script>
