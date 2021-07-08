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
            :value="myvalue"
            label="swapper Name"
            @input="updateValue"
        ></v-text-field>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch ,Prop, Model, PropSync, Vue } from 'vue-property-decorator';
@Component
export default class UserComponent extends Vue {
  @Prop({ type: String }) childValue: string;
  // 값 변경 적용
  updateValue(newVal) {
    console.log('***', newVal)
    this.$emit('update:childValue', newVal);  // 값 설정 및, 부모 컴포넌트로 이벤트 전달
  }


  myvalue = ''


  @Watch('childValue')
  onPersonChanged2(val: string, oldVal: string) {
   console.log(val,oldVal)
    this.myvalue = val
  }




}
</script>
