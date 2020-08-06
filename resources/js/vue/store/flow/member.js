import router from '../../../routes';
import axios from 'axios';
import { apiLogin } from '../api-control/api';

export default {
    state: {
        user: {
            username: '',
            password: '',
        },
        usertoken: '',
    },
    actions: {
        signIn(context, user) {
            context.commit('LOADING', true);
            context.commit('USERDATA', user);

            apiLogin(
                user,
                'post'
            ).then((response) => {
                context.commit('USERSETTOKEN', response.data.data.token);
                context.commit('LOADING', false);
                // context.dispatch('closeLoginModalWindow', false);
                router.push('/member');
            }).catch((error) => {
                context.commit('ERROR', error.response);
                context.commit('LOADING', false);
            });

            // const api = `${process.env.MIX_CLIENT_API_DOMAINNAME}/api/login`;
            // const headers = {
            //     "Accept": "application/json"
            // }
            // context.commit('LOADING', true);

            // axios.post(
            //     api,
            //     user,
            //     { headers: headers }
            // ).then((response) => {
            //     // console.log(response);
            //     context.commit('USERSETTOKEN', response.data.data.token);
            //     context.commit('LOADING', false);
            //     context.dispatch('closeLoginModalWindow', false);
            // }).catch((error) => {
            //     // console.log(error.response);
            //     context.dispatch('updateModalMessage', error.response);
            //     context.commit('LOADING', false);
            //     context.dispatch('closeLoginModalWindow', false);
            // });
        },
        logout(context, Authorization) {
            const api = `${process.env.MIX_CLIENT_API_DOMAINNAME}/api/logout`;
            const headers = {
                "Content-Type": "application/json",
                "Authorization": 'bearer ' + Authorization
            }
            context.commit('LOADING', true);

            axios({
                method: 'post',
                url: api,
                headers: headers
            })
                .then((response) => {
                    // console.log(response);

                    let errormodal_data = {
                        data: response.data,
                    }
                    // console.log(errormodal_data);
                    context.commit('USERREMOVETOKEN', errormodal_data);

                    // 新增用顯示狀態處理
                    context.dispatch('updateMessage', { message: '已登出', status: 'danger' });

                    context.commit('LOADING', false);
                }).catch((error) => {
                    // console.log(error);

                    context.dispatch('updateModalMessage', error.response);
                    context.commit('LOADING', false);
                });
        },
        settoken(context, token) {
            console.log('context:', context);
            console.log('token:', token);
            context.commit('SETTOKEN', token);
        },
    },
    mutations: {
        USERDATA(state, payload) {
            Object(state).user = payload;
        },
        // USERTOKEN(state, payload) {
        //   // console.log(state);
        //   Object(state).usertoken = payload;
        //   localStorage.setItem('token', payload);
        //   // 第一次用 location.href
        //   if (localStorage.token) {
        //     window.location.href = '/';
        //   }
        //   // router.push('/member-index');
        // },
        USERSETTOKEN(state, payload) {
            state.usertoken = payload;
            localStorage.setItem('token', payload);
        },
        SETTOKEN(state, payload) {
            state.usertoken = payload;
        },
        // USERREMOVETOKEN(state, payload) {
        //     state.usertoken = ""
        //     if (payload.data.success) {
        //         router.push('/');
        //         localStorage.removeItem('token');
        //     }
        // },
    },
    getters: {
        user: state => state.user,
        usertoken: state => state.usertoken,
    },
}