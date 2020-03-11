<template>
  <b-row>
    <b-col cols="12" lg="6">
      <b-card no-header>
        <template slot="header">
          User uuid:  #{{ $route.params.id }}
        </template>
        <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="user.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="user.name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>

          <!-- <b-form-group id="input-group-3" label="Role:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="user.role_name"
              :options="foods"
              required
            ></b-form-select>
          </b-form-group> -->
<!-- 
          <b-form-group id="input-group-4">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group> -->

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
          <b-button @click="goBack">Back</b-button>
        </b-form>
        <!-- <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card> -->
      </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'User',
  props: {
    caption: {
      type: String,
      default: 'User id'
    },
  },
  data: () => {
    return {
      fields: [
        {key: 'key'},
        {key: 'value'},
      ],
      user: {},
      show: true,
    }
  },
  computed: {
    ...mapGetters({
      users: 'user/getUsers',
      getUser: 'user/getUser',
      loadingIssue: 'user/getLoadingIssue',
    }),
  },
  mounted() {
    let id = this.$route.params.id;
    if (this.users.length !== 0) {
      this.user = this.users.find(user => user.uuid === id);
    }
    else {
      this.getUserById(id)
        .then((result) => {
          console.log(this.loadingIssue)
          if (this.loadingIssue === '') {
            this.user = this.getUser;
          }
          else {
             console.log(this)
            this.makeToast(this.loadingIssue, 'danger');
            this.$router.push({path: '/users'})   
           
          }
        });
    }
  },
  methods: {
    ...mapActions('user', ['getUserById']),
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
    onSubmit() {

    },
    onReset() {

    },
    makeToast(message, variant = null) {
      console.log('toast');
      this.$swal('Hello Vue world!!!');
      // this.$bvToast.toast(message, {
      //   title: 'Login Fail',
      //   variant: variant,
      //   solid: true
      // });
    },
  }
}
</script>
