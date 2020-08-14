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
              <div class="">作者</div>
              <div class="d-none d-sm-flex">文章標題</div>
              <div class="">文章內容</div>
              <div class="">動作</div>
            </div>
          </div>
          <div class="row">
            <router-link
              v-for="(item, i) in articleList.article_list" :key="i"
              :to="'/article-detail/' + item.id" class="content_flex_wrap">
              <div class="tablecontent_row py-3">
                <div class="">陳庭瑜 {{ item.member_id }}</div>
                <div class="d-none d-sm-flex">{{ item.title }}</div>
                <div class="articlelist_content">{{ item.content }}
                </div>
                <div class="">
                  <router-link
                    :to="'/update-article-detail/' + item.id"
                  >
                    <span class="btn content-button">修改</span>
                  </router-link>
                  <span class="ml-3 h4 icon icon-garbage"></span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="pagination_wrap row pt-3">
          <nav aria-label="Page navigation example" v-if="articleList">
            <ul class="pagination" v-if="articleList.pagination">
              <li
                class="page-item"
                v-if="articleList.pagination.has_pre">
                <span @click="getArticleList(articleList.pagination.has_pre)" class="page-link">上一頁</span>
              </li>
              <li
                v-for="(item, i) in  articleList.pagination.total_page"
                :key="i"
                :class="{'active': ( articleList.pagination.current_page == ( i + 1 ) ) }"
                class="page-item">
                <span @click="getArticleList(( i + 1 ))" class="page-link">{{ (i + 1) }}</span>
              </li>
              <li
                class="page-item"
                v-if="articleList.pagination.has_next">
                <span @click="getArticleList(articleList.pagination.has_next)" class="page-link">下一頁</span>
              </li>
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
import router from '../../../routes';

export default {
  name: "ArticleList",
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    getArticleList(page){
      this.$store.dispatch("getArticleList", page);
    },
  },
  computed: {
    ...mapGetters([
      'articleList'
    ])
  },
  watch: {
    articleList(){}
  },
  created() {
    this.page = this.$route.query;
    Object.keys(this.page).length == 0 ? this.page = 1 : this.page = this.$route.query.page;

    this.getArticleList(this.page);
  }
};
</script>