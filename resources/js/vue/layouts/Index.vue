<template>
    <div class="index">
        <Header></Header>
        <!-- <LoginModal></LoginModal> -->
        <div class="container-fluid">
            <div class="row">
                <Aside></Aside>
                <main role="main" class="col-md-8 ml-sm-auto col-lg-9 p-md-4">
                    <router-view></router-view>
                </main>
            </div>
        </div>
        <!-- <Footer></Footer> -->
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
import LoginModal from '../components/Member/LoginModal'

export default {
    components: {
        Header,
        Aside,
        // Content,
        Footer,
        LoginModal
    },
    computed: {
    },
    methods: {
        checkToken() {
            this.$store.dispatch("checkTokenEmpty");
        },
        async getAside() {
            await this.$store.dispatch("getAsideMenu");
        }
    },
    created() {
        this.checkToken();
        this.getAside();
        // let token = localStorage.getItem('token');
        // console.log(token);
    },
}
</script>

<style lang="scss">
@import "../../../sass/app";
</style>
