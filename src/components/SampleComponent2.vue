<template>
  <div class="hello">
    <h1>{{ aaa}}</h1>
    <h2>{{bbb}}</h2>
    <button @click="clickButton">click</button>
    <div>
      ddd
      <v-text-field v-model="obj.name"></v-text-field>
      <v-text-field v-model="obj.image"></v-text-field>
    </div>
    <br>
    {{obj}}
  </div>
</template>

<script lang="ts">
import { Component,Prop, Model, PropSync, Vue } from 'vue-property-decorator';

export interface IProfile {
  id:number;
  name:string;
  image?:string;
}

@Component({
  components: {
    //AppButton,
    //ProductList
  },
  data:()=>{
    return {aaa:'1111111'}
  },
  methods:{
  clickHander(){
      console.log('22222')  
    }
  },
  directives: {
    //resize
  },
  filters: {
    //dateFormat
  },
  mixins: [
    //PageMixin
  ]
})
export default class SampleComponent extends Vue {
  //vue.runtime.esm.js?2b0e:619 [Vue warn]: Property or method "aaa" is not defined on the instance but referenced during render. 
  //Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property
  bbb = 'bbbb'

  obj:IProfile = {id:0,name:'', image:''}

  clickButton(){
    this.bbb = 'ccc'
  }
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
