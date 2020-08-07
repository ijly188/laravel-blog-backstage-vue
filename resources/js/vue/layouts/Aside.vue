<template>
  <div class="aside_wrap">
    <nav id="sidebarMenu" class="col-md-4 col-lg-3 d-md-block sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <h5 class="sidebar-heading d-flex mt-4 mb-1 aside_padding_left">
          <span class="h6 aside_title">後台內容</span>
        </h5>
        <ul class="nav flex-column">
          <li class="nav-item aside_padding_left"
            v-bind:class="{ active: ( $route.fullPath === '/member-list') }">
            <router-link to="/member-list" class="nav-link p-0 font-weight-light">
              <span class="icon h4 icon-member_profile"></span>
              <span class="nav-item-text">會員管理</span>
            </router-link>
          </li>
          <li class="nav-item aside_padding_left">
            <router-link to="/article-list" class="nav-link p-0 font-weight-light">
              <span class="icon h4 icon-article"></span>
              <span class="nav-item-text">文章管理</span>
            </router-link>
          </li>
          <li class="nav-item aside_padding_left">
            <router-link to="/system-user-list" class="nav-link p-0 font-weight-light">
              <span class="icon h4 icon-administer"></span>
              <span class="nav-item-text">管理員管理</span>
            </router-link>
          </li>
          <li class="nav-item aside_padding_left">
            <router-link to="/group-list" class="nav-link p-0 font-weight-light">
              <span class="icon h4 icon-role-management-permissions"></span>
              <span class="nav-item-text">角色權限設定</span>
            </router-link>
          </li>
        </ul>
        <!-- <h5 class="sidebar-heading d-flex mt-4 mb-1 aside_padding_left">
          <span class="h6 aside_title">管理員帳戶</span>
        </h5>
        <ul class="nav flex-column">
          <li class="nav-item aside_padding_left">
            <a class="nav-link p-0 font-weight-light" href="#">
              <span class="icon h4 icon-edit_article"></span>
              <span class="nav-item-text">修改個人資料</span>
            </a>
          </li>
          <li class="nav-item aside_padding_left">
            <a class="nav-link p-0 font-weight-light" href="#">
              <span class="icon h4 icon-password"></span>
              <span class="nav-item-text">修改密碼</span>
            </a>
          </li>
        </ul> -->
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Aside",
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters([])
  },
  watch: {},
  created() {}
};
</script>