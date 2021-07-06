<template>
<div>
  <h1>11</h1>
  <HelloWorld />
  <sample2/>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import sample2 from '@/components/SampleComponent2.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      HelloWorld,
      sample2
    },
  })
</script>
