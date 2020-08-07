<template>
    <div class="ArticleList_wrap main_wrap">
      <h3 class="h3 page_title">文章列表</h3>
      <div class="container-fluid">
        <div class="row">
          <div class="col align-self-start pl-0 allmemberwordding_wrap">
            <h4 class="allmemberwordding h4 font-weight-light mr-2 d-inline">總文章數：<span class="h3">185,323</span> 篇</h4>
            <router-link to="/create-article-detail" class="btn content-button d-inline-block">
              <span class="icon-add font-weight-bold"></span>
              新增文章
            </router-link>
          </div>
          <div class="col-lg-4 align-self-end">
            <input class="form-control search search-member" type="text" placeholder="搜尋名字、Email" aria-label="Search">
          </div>
        </div>
        <div class="table_wrap">
          <div class="row">
            <div class="tableheader_wrap">
              <div class="">頭貼</div>
              <div class="">姓名</div>
              <div class="d-none d-sm-flex">Email</div>
              <div class="">動作</div>
            </div>
          </div>
          <div class="row">
            <router-link to="/article-detail/1" class="content_flex_wrap">
              <div class="tablecontent_row">
                <div class="icon_column">
                  <span class="icon_wrap">
                    <span class="icon-photo1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></span>
                  </span>
                </div>
                <div class="">陳庭瑜</div>
                <div class="d-none d-sm-flex">test@test.test</div>
                <div class="">
                  <span class="btn content-button">修改</span>
                  <span class="ml-3 h4 icon icon-garbage"></span>
                </div>
              </div>
            </router-link>
            <router-link to="/article-detail/1" class="content_flex_wrap">
              <div class="tablecontent_row">
                <div class="icon_column">
                  <span class="icon_wrap">
                    <span class="icon-photo1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></span>
                  </span>
                </div>
                <div class="">陳庭瑜</div>
                <div class="d-none d-sm-flex">test@test.test</div>
                <div class="">
                  <span class="btn content-button">修改</span>
                  <span class="ml-3 h4 icon icon-garbage"></span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="pagination_wrap row pt-3">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ArticleList",
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