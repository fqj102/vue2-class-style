<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Model, PropSync, Vue } from 'vue-property-decorator';

export interface IProfile {
  id:number;
  name:string;
  image?:string;
}

@Component
 export default class SampleComponent extends Vue {
   @Prop({ type: String, required: true }) readonly name!: string;
   @Prop({ type: Array, default: () => [] }) readonly items!: string[];
   @Prop(Object) readonly profile?: IProfile;    // null / undefined 가능
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
