<template>
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
</template>

<script lang="ts">
import { Component, Watch ,Prop, Model, PropSync, Vue } from 'vue-property-decorator';

export interface Person {
  id:number;
  name:string;
  image?:string;
}

@Component
export default class UserComponent extends Vue {

  form = {
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
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }


  validate () {
    const valid = this.$refs.form.validate()
    console.log(valid)
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
