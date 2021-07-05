<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Watch ,Prop, Model, PropSync, Vue } from 'vue-property-decorator';

export interface Person {
  id:number;
  name:string;
  image?:string;
}

@Component
export default class SampleComponent extends Vue {
  @Watch('child')
   // eslint-disable-next-line @typescript-eslint/no-empty-function
 onChildChanged(val: string, oldVal: string) {}

  @Watch('person', { immediate: true, deep: true })
   // eslint-disable-next-line @typescript-eslint/no-empty-function
  onPersonChanged1(val: Person, oldVal: Person) {}

  @Watch('person')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onPersonChanged2(val: Person, oldVal: Person) {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
