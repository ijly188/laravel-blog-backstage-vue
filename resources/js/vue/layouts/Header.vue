<template>
    <nav class="header--topcolumn_wrap navbar navbar-dark sticky-top flex-md-nowrap p-0">
        <div class="navbar-brand col-md-4 col-lg-3 mr-0 px-3 d-block companylogoarea">
            <router-link to="/">
                <img src="/img/logo_white.png" alt="" srcset="" class="img-fluid indexbannerimg aside_padding_left">
            </router-link>
        </div>
        <button class="my-3 navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <ul class="navbar-nav px-3 d-none d-md-inline">
            <span class="text-light mr-2 d-inline-block username_wrap">hi, {{ username }}</span>
            <span @click.prevent="postLogout" class="btn btn-light logout-button p-0">登出</span>
        </ul>
    </nav>
</template>

<style lang="scss">
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Header',
    data() {
        return {
            
        }
    },
    methods: {
        postLogout(){
            this.$store.dispatch("postLogout");
        },
    },
    computed: {
        ...mapGetters([
            'username'
        ])
    },
    watch: {
        
    },
    created () {
    },
}
</script>