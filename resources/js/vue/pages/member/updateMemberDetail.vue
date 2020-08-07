<template>
    <div class="MemberDetail_wrap main_wrap">
      <h3 class="h3 page_title">會員資料</h3>
      <div class="container-fluid">
        <div class="row">
          <div class="col align-self-start pl-0 btn_wrap">
            <router-link to="/update-member-detail/1" class="btn content-button d-inline-block">
              <span class="icon-add font-weight-bold"></span>
              修改會員
            </router-link>
            <router-link to="/delete-member" class="btn content-button d-inline-block">
              <span class="icon-add font-weight-bold"></span>
              刪除會員
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="detail_content col-12 mx-auto text-center">
            <div class="big_icon_wrap col-12 mx-auto text-center">
              <div class="form-group row">
                <span class="icon_wrap mx-auto">
                  <span class="icon-photo1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></span>
                </span>
              </div>
            </div>
            <div class="name col-12 mx-auto text-center">
              <div class="form-group row">
                <label for="姓名" class="col-4 col-form-label">姓名</label>
                <div class="col-8">
                  <input type="text" class="form-control" id="姓名" value="陳庭瑜">
                </div>
              </div>
            </div>
            <div class="account col-12 mx-auto text-center">
              <div class="form-group row">
                <label for="staticemail" class="col-4 col-form-label">帳號</label>
                <div class="col-8">
                  <input type="text" class="form-control" id="staticemail" value="email@example.com">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "memberDetail",
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