import router from '../../../routes';
import axios from 'axios';
const { token } = localStorage;
import { errorHandle } from '../api-control/https';
import { apiLogin, apiLogout, refreshToken, apiGetAside } from '../api-control/api';

export default {
    state: {
        user: {
            username: '',
            password: '',
        },
        usertoken: '',
        aside: {},
        username: '',
    },
    actions: {
        changeUserinput(context, { userValue, userId }) {
            context.commit("UPDATEUSERDATA", { userValue, userId });
        },
        async postLoginuser(context) {
            // this.$store.dispatch("checkuserdata");
            const user = this.state.MemberModules.user;
            
            // loading
            context.commit('UPDATELOADING', true);
            context.commit("POSTLOGIN", user);
            // console.log(user);
            await apiLogin(
                user,
                'post'
            ).then((response) => {
                console.log(response);
                context.commit('SETUSERTOKEN', response.data.data.token);
                context.commit('UPDATELOADING', false);
            }).catch((error) => {
                // context.commit('ERROR', error.response);
                const data = error.response.status;
                const errorMsg = error.response.data.message;
                errorHandle(data, errorMsg);
                context.commit('UPDATELOADING', false);
            });
        },
        // checkuserdata(context) {
        //     console.log('check user data');
        //     if(true){
        //         context.dispatch("loginuser")
        //     }
        // }
        async postLogout(context) {
            // loading
            context.commit('UPDATELOADING', true);
            await apiLogout(
                'post'
            ).then((response) => {
                context.commit('UPDATELOADING', false);

                context.commit('SETUSERTOKEN', '');
                
                // 新增用顯示狀態處理
                context.dispatch('updateMessage', { message: '已登出', status: 'danger' });

                router.push('/login');
            }).catch((error) => {
                const data = error.response.status;
                const errorMsg = error.response.data.message;
                errorHandle(data, errorMsg);
                context.commit('UPDATELOADING', false);
            });
        },
        checkTokenEmpty(context) {
            // loading
            // context.commit('UPDATELOADING', true);
            if (!token) window.location.href = '/login';
        },
        async getAsideMenu(context) {
            context.commit('UPDATELOADING', true);
            await apiGetAside(
            ).then((response) => {
                refreshToken(context, response);
                context.commit('UPDATEASIDE', response.data.data.main_menu);
                context.commit('UPDATEUSERNAME', response.data.data.user);
                context.commit('UPDATELOADING', false);
            }).catch((error) => {
                const data = error.response.status;
                const errorMsg = error.response.data.message;
                errorHandle(data, errorMsg);
                context.commit('UPDATELOADING', false);
            });
        }
    },
    mutations: {
        UPDATEUSERDATA(state, payload) {
            payload.userId == 'username' 
            ? state.user.username = payload.userValue 
            : state.user.password = payload.userValue;
        },
        POSTLOGIN(state, payload) {
            state.user = payload;
        },
        SETUSERTOKEN(state, payload) {
            state.usertoken = payload;
            localStorage.setItem('token', payload);
            if (localStorage.token) {
                window.location.href = '/';
            }
        },
        async USERREFRESHTOKEN(state, payload) {
            Object(state).usertoken = payload;
            await localStorage.removeItem('token');
            await localStorage.setItem('token', payload);
            window.location.reload();
            console.log(`payload:${payload}, local:${localStorage.token}`);
        },
        UPDATEASIDE(state, payload) {
            state.aside = payload;
        },
        UPDATEUSERNAME(state, payload) {
            state.username = payload;
        }
    },
    getters: {
        user: state => state.user,
        usertoken: state => state.usertoken,
        aside: state => state.aside,
        username: state => state.username,
    },
}