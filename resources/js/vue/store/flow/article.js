import router from '../../../routes';
import axios from 'axios';
const { token } = localStorage;
import { errorHandle } from '../api-control/https';
import { apiGetArticlelist } from '../api-control/api';

export default {
    state: {
        articleList: [],
    },
    actions: {
        async getArticleList(context, page) {
            router.push("/article-list?page=" + page);
            context.commit('UPDATELOADING', true);

            await apiGetArticlelist(
            ).then((response) => {
                context.commit('UPDATELOADING', false);
                context.commit("UPDATEARTICLEDATA", response.data.data);
            }).catch((error) => {
                // context.commit('ERROR', error.response);
                const data = error.response.status;
                const errorMsg = error.response.data.message;
                errorHandle(data, errorMsg);
                context.commit('UPDATELOADING', false);
            });
        },
    },
    mutations: {
        UPDATEARTICLEDATA(state, payload) {
            state.articleList = payload;
        },
    },
    getters: {
        articleList: state => state.articleList,
    },
}