<template>
  <b-row>
    <b-col cols="12" lg="6">
      <b-card no-header>
        <template slot="header">
          User id:  {{ $route.params.id }}
        </template>
        <b-table striped small fixed responsive="sm" :items="items" fields=":fields">
        </b-table>
        <template slot="footer">
          <b-button @click="goBack">Back</b-button>
        </template>
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
      items: {},
    }
  },
  computed: {
    ...mapGetters({
      users: 'user/getUsers',
    }),
  },
  mounted() {
    let id = this.$route.params.id;
    console.log(id)
    const user = this.users.find(user => user.uuid === id);
    const userDetails = user ? Object.entries(user) : [['uuid', 'Not found']]
    this.items = userDetails.map(([key, value]) => {return {key: key, value: value}})
                  
    console.log(this.items)
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    }
  }
}
</script>
