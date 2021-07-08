<template>
  <div style="margin:20px">
  <v-form
      ref="form"
      v-model="form.valid"
      lazy-validation
  >
    <v-text-field
        v-model="form.name"
        :counter="10"
        :rules="form.nameRules"
        label="Name"
        required
    ></v-text-field>

    <v-text-field
        v-model="form.email"
        :rules="form.emailRules"
        label="E-mail"
        required
    ></v-text-field>

    <v-select
        v-model="form.select"
        :items="form.items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
    ></v-select>

    <v-checkbox
        v-model="form.checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
    ></v-checkbox>

    <v-btn
        :disabled="!form.valid"
        color="success"
        class="mr-4"
        @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
        color="error"
        class="mr-4"
        @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
        color="warning"
        @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
    <div>{{renderCnt1()}}</div>

    <Swapper  :childValue="hello" @update:childValue="hello = $event" >
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template v-slot:footer>
      <h1>Here's some contact info</h1>
    </template>
    </Swapper>
    <Swapper1  :childValue.sync="hello" >
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <h1>Here's some contact info</h1>
      </template>
    </Swapper1>
    <hr>
    <div>
      <v-text-field
          v-model="hello"
          label="Name"
      ></v-text-field>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Watch ,Prop, Model, PropSync, Vue } from 'vue-property-decorator';
import Swapper from '@/components/Swaper'
import Swapper1 from '@/components/Swaper1'
export interface Person {
  id:number;
  name:string;
  image?:string;
}

@Component({
  components:{
    Swapper,
    Swapper1
  }
})
export default class UserComponent extends Vue {

  private renderCnt = 0

  hello = ''

  renderCnt1 () {
    console.log( 'rendering ,111111')

    console.log(this.addDays(new Date(),-10));
  }

  addDays(date, days) {
    const result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
  }


  private form = {
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: '',
    items: [
      {text:'선택하세요', value: ''},
      {text:'hello1', value:'01'},
      {text:'hello2', value:'02'},
      {text:'hello3', value:'03'},
      {text:'hello3', value:'04'},
      {text:'hello4', value:'05'},
    ],
    checkbox: false,
  }

  mounted() {
    console.log('ddddd')
  }


  validate () {
    const valid = this.$refs.form.validate()
    console.log(valid)
    console.log(this.form)
  }
  reset () {
    this.$refs.form.reset()
  }
  resetValidation () {
    this.$refs.form.resetValidation()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
