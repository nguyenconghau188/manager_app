<template>
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card>
        <div slot="header" v-html="caption"></div>
        <!-- <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
          <template slot="UUID" slot-scope="data">
            <strong>{{data.item.uuid}}</strong>
          </template>
          <template slot="Name" slot-scope="data">
            <strong>{{data.item.name}}</strong>
          </template>
          <template slot="Email" slot-scope="data">
            <strong>{{data.item.email}}</strong>
          </template>
          <template slot="Phone number" slot-scope="data">
            <strong>{{data.item.phone_number}}</strong>
          </template>
          <template slot="Role" slot-scope="data">
            <strong>{{data.item.role_name}}</strong>
          </template>
          <template slot="Status" slot-scope="data">
            <b-badge :variant="getBadge(data.item.status)">{{data.item.status_name}}</b-badge>
          </template>
        </b-table> -->
        <!-- <b-table striped hover :items="users"></b-table> -->
        <!-- <div v-if="loading" class="m-5 d-flex justify-content-center">
          <b-spinner label="Busy"></b-spinner>
        </div>
        <div v-else> -->
          <b-table striped hover :items="items" :busy="loading" :fields="fields" @row-clicked="rowClicked">
            <template v-slot:table-busy>
              <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>
            <template slot="status_name" slot-scope="data">
              <b-badge :variant="getBadge(data.item.status)">{{data.item.status_name}}</b-badge>
            </template>
          </b-table>
        <!-- </div> -->
        <nav>
          <b-pagination size="sm" 
            :total-rows="totalRows" 
            :per-page="perPage" 
            v-model="currentPage" 
            prev-text="Prev" 
            next-text="Next" 
            hide-goto-end-buttons
          />
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
      items: [],
      fields: [
        {
          key: 'uuid'
        },
        {
          key: 'name',
          sortable: true,
        },
        {
          key: 'email'
        },
        {
          key: 'phone_number'
        },
        {
          key: 'role_name',
          label: 'Role'
        },
        {
          key: 'status_name',
          label: 'Status'
        }
      ],
      currentPage: 1,
      perPage: 15,
      totalRows: 0,
      loading: false,
    }
  },
  computed: {
    ...mapGetters({
      getItems: 'user/getUsers',
      getCurrentPage: 'user/getCurrentPage',
      pagination: 'user/getPagination',
      loadingIssue: 'user/getLoadingIssue',
    }),
  },
  mounted() {
    if (this.items.length === 0) {
      this.loading = true;
      this.getUsersPagination(this.currentPage)
        .then(() => {
          this.loading = false;
          this.totalRows = this.pagination.total;
          this.items = this.getItems;
        });
    }
  },
  watch: {
    currentPage() {
      this.loading = true;
      this.getUsersPagination(this.currentPage)
          .then(() => { 
            this.loading = false;
            this.items = this.getItems;
          })
          .catch(() => {
            this.loading = true;
          });
    }
  },
  methods: {
    ...mapActions('user', ['getUsersPagination']),
    getBadge (status) {
      return status === 1 ? 'primary'
        : status === 2 ? 'success'
          : status === 3 ? 'warning' : 'danger'
    },
    getRowCount (items) {
      return items.length
    },
    userLink (uuid) {
      return `/users/${uuid.toString()}`
    },
    rowClicked (item) {
      const userLink = this.userLink(item.uuid);
      console.log(userLink)
      this.$router.push({path: userLink})
    },
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}

</style>
