import Vue from 'vue';
import Vuex from 'vuex';

import EffectModules from './common/effect';
import HeaderModules from './common/header';
import FooterModules from './common/footer';
import MemberModules from './flow/member';
import ArticleModules from './flow/article';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
    },
    actions: {
    },
    mutations: {
    },
    getters: {
    },
    modules: {
        EffectModules,
        HeaderModules,
        FooterModules,
        MemberModules,
        ArticleModules
    },
});