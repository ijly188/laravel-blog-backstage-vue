import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import Indexwrap from './vue/layouts/Indexwrap';
import Index from './vue/layouts/Index';

// page
import Content from './vue/pages/Content';

// member-manage
import MemberList from './vue/pages/member/MemberList';
import MemberDetail from './vue/pages/member/MemberDetail';
import createMemberDetail from './vue/pages/member/createMemberDetail';
import updateMemberDetail from './vue/pages/member/updateMemberDetail';

// systemuser-manage
import SystemUserList from './vue/pages/systemuser/SystemUserList';
import SystemUserDetail from './vue/pages/systemuser/SystemUserDetail';
import createSystemUserDetail from './vue/pages/systemuser/createSystemUserDetail';
import updateSystemUserDetail from './vue/pages/systemuser/updateSystemUserDetail';

// article-manage
import ArticleList from './vue/pages/article/ArticleList';
import ArticleDetail from './vue/pages/article/ArticleDetail';
import createArticleDetail from './vue/pages/article/createArticleDetail';
import updateArticleDetail from './vue/pages/article/updateArticleDetail';


Vue.use(Router);

const routersetting = {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          component: Indexwrap,
          children: [
            {
              path:'',
              component: Index,
              children: [
                {
                  path:'',
                  component: Content,
                },
                // member
                {
                  path:'/member-list',
                  component: MemberList,
                },
                {
                  path:'/member-detail/:memberId',
                  component: MemberDetail,
                },
                {
                  path:'/create-member-detail',
                  component: createMemberDetail,
                },
                {
                  path:'/update-member-detail/:memberId',
                  component: updateMemberDetail,
                },
                // systemuser
                {
                  path:'/systemuser-list',
                  component: SystemUserList,
                },
                {
                  path:'/systemuser-detail/:systemUserId',
                  component: SystemUserDetail,
                },
                {
                  path:'/create-systemuser-detail',
                  component: createSystemUserDetail,
                },
                {
                  path:'/update-systemuser-detail/:systemUserId',
                  component: updateSystemUserDetail,
                },
                // article
                {
                  path:'/article-list',
                  component: ArticleList,
                },
                {
                  path:'/article-detail/:articleId',
                  component: ArticleDetail,
                },
                {
                  path:'/create-article-detail',
                  component: createArticleDetail,
                },
                {
                  path:'/update-article-detail/:articleId',
                  component: updateArticleDetail,
                },
              ],
            },
          ],
        }
      ],
    }
  ],
}

export default new Router(routersetting);
