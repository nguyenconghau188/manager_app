<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit.prevent="handleSubmit">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input 
                      type="text" 
                      class="form-control" 
                      placeholder="Email" 
                      autocomplete="username email" 
                      v-model="email" 
                      :state="emailState"
                      aria-describedby="input-email-feedback"
                    />
                    <b-form-invalid-feedback id="input-email-feedback">
                      {{ emailError }}
                    </b-form-invalid-feedback>
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input 
                      type="password" 
                      class="form-control" 
                      placeholder="Password" 
                      autocomplete="current-password" 
                      v-model="password" 
                      :state="passwordState" 
                      aria-describedby="input-password-feedback" 
                    />
                    <b-form-invalid-feedback id="input-password-feedback">
                      {{ passwordError }}
                    </b-form-invalid-feedback>
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button type="submit" variant="primary" class="px-4">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <b-button variant="primary" class="active mt-3">Register Now!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { validateEmail } from '../../common/commonFunctions';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      emailError: '',
      emailState: true,
      password: '',
      passwordError: '',
      passwordState: true,
      isSubmited: false,
    };
  },
  created() {
    this.forceLogout();
  },
  computed: {
    ...mapState('user', ['user', 'isLogin']),
  },
  methods: {
    ...mapActions('user', ['login', 'forceLogout']),
    handleSubmit() {
      this.isSubmited = true;
      if (this.validateForm()) {
        let { email, password } = this;
        this.login({ email, password });
      }
    },
    validateForm() {
      let result = true;
      if (this.password === '') {
        result = false;
        this.passwordState = false;
        this.passwordError = 'Please enter password!';
      }
      else if (this.password.length <= 6) {
        result = false;
        this.passwordState = false;
        this.passwordError = 'Password has least 6 charactors!';
      }
      else {
        this.passwordState = true;
        this.passwordError = '';
      }
      if (this.email === '') {
        result = false;
        this.emailState = false;
        this.emailError = 'Please enter email!';
      }
      else if (!validateEmail(this.email)) {
        result = false;
        this.emailState = false;
        this.emailError = 'Wrong format email!';
      }
      else {
        this.emailState = true;
        this.emailError = '';
      }
      return result;
    },
  }
}
</script>
