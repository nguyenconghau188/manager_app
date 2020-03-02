<template>
  <b-row>
    <b-col cols="12" xl="6">
      <transition name="slide">
      <b-card>
        <div slot="header" v-html="caption"></div>
        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
          <template slot="id" slot-scope="data">
            <strong>{{data.item.id}}</strong>
          </template>
          <template slot="name" slot-scope="data">
            <strong>{{data.item.name}}</strong>
          </template>
          <template slot="status" slot-scope="data">
            <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
          </template>
        </b-table>
        <nav>
          <b-pagination size="sm" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
      </b-card>
      </transition>
    </b-col>
  </b-row>
</template>

<script>
// import usersData from './UsersData'
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Users',
  props: {
    caption: {
      type: String,
      default: 'Users'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      // items: usersData.filter((user) => user.id < 42),
      // items: [],
      // currentPage: 1,
      fields: [
        {key: 'id'},
        {key: 'name'},
        {key: 'registered'},
        {key: 'role_name'},
        {key: 'status_name'}
      ],
      // currentPage: 1,
      perPage: 15,
      totalRows: 0
    }
  },
  computed: {
    ...mapGetters({
      items: 'user/getUsers',
      currentPage: 'user/getCurrentPage',
      pagination: 'user/getPagination',
    }),
  },
  mounted() {
    if (this.items.length === 0) {
      console.log('mounted')
      this.getUsersPagination()
        .then((result) => {
          this.totalRows = this.pagination.total;
          console.log(this.totalRows)
        }).catch((err) => {
          console.log(err)
        });;
    }
  },
  methods: {
    ...mapActions('user', ['getUsersPagination']),
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    getRowCount (items) {
      return items.length
    },
    userLink (id) {
      return `users/${id.toString()}`
    },
    rowClicked (item) {
      const userLink = this.userLink(item.id)
      this.$router.push({path: userLink})
    }

  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
