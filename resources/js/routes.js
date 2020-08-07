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
              ],
            },
          ],
        }
      ],
    }
  ],
}

export default new Router(routersetting);
