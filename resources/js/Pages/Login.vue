<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      signUp: false
    };
  },
  methods: {
    handleSubmit() {
      console.log('Formulario enviado:', this.formData);
      // Puedes utilizar Inertia o realizar otras acciones aquí
    },
    changeMode() {
        this.signUp = !this.signUp
    }
  }
};
</script>

<template>
  <div class="flex flex-column md:flex-row">
    <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
      <div class="flex flex-wrap justify-content-center align-items-center gap-2">
        <label class="w-6rem">Email</label>
        <InputText v-model="formData.username" id="username" type="text" class="w-12rem" />
      </div>
      <div class="flex flex-wrap justify-content-center align-items-center gap-2">
        <label class="w-6rem">Password</label>
        <InputText v-model="formData.password" id="password" type="password" class="w-12rem" />
      </div>
      <div class="flex flex-wrap justify-content-center align-items-center gap-2" v-if="this.signUp">
        <label class="w-6rem">Confirm password</label>
        <InputText v-model="formData.confirmPassword" id="password" type="password" class="w-12rem" />
      </div>
      <Button @click="handleSubmit" label="Login" icon="pi pi-user" class="w-10rem mx-auto"></Button>
    </div>
    <div class="w-full md:w-2">
      <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
      <Divider layout="horizontal" class="flex md:hidden" align="center"><b>OR</b></Divider>
    </div>
    <div class="w-full md:w-5 flex align-items-center justify-content-center py-5">
      <Button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-10rem" @click="changeMode"></Button>
    </div>
  </div>
</template>

<style>
</style>