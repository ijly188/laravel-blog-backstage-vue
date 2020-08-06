import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import Indexwrap from './vue/layouts/Indexwrap';
import Index from './vue/layouts/Index';

// page
import Content from './vue/pages/Content';

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
              ],
            },
          ],
        }
      ],
    }
  ],
}

export default new Router(routersetting);
