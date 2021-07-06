<template>
  <div>
      <h1>user info:</h1>
      <UserComponent/>
      <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Watch ,Prop, Model, PropSync, Vue } from 'vue-property-decorator';
import UserComponent from '../components/UserForm.vue'
export interface Person {
  id:number;
  name:string;
  image?:string;
}

@Component({
  components: {
    UserComponent
  }
})
export default class User extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
