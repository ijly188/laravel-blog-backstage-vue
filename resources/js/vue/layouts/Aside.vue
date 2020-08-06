<template>
  <div class="aside_wrap">
    <nav id="sidebarMenu" class="col-md-4 col-lg-3 d-md-block sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <h5 class="sidebar-heading d-flex mt-4 mb-1 aside_padding_left">
          <span class="h6 aside_title">後台內容</span>
        </h5>
        <ul class="nav flex-column">
          <li class="nav-item aside_padding_left active">
            <a class="nav-link p-0 font-weight-light" href="#">
              <span class="text-light icon-number"></span>
              會員管理
            </a>
          </li>
          <li class="nav-item aside_padding_left">
            <a class="nav-link p-0 font-weight-light" href="#">
              文章管理
            </a>
          </li>
        </ul>
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