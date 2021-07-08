<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <div>
      <div>
        <v-text-field
            v-model="childValue1"
            label="swapper Name222"
        ></v-text-field>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component,  PropSync, Vue } from 'vue-property-decorator';
@Component
export default class UserComponent1 extends Vue {
  //이름 다르게 줘야함 참....
  @PropSync('childValue',{ type: String }) childValue1!: string;


updated() {
  console.log(this.childValue1)
}




}
</script>
