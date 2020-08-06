<template>
    <nav class="header--topcolumn_wrap navbar navbar-dark sticky-top flex-md-nowrap p-0">
        <div class="navbar-brand col-md-4 col-lg-3 mr-0 px-3 d-block companylogoarea">
            <img src="/img/logo_white.png" alt="" srcset="" class="img-fluid indexbannerimg aside_padding_left">
        </div>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav px-3 d-inline">
            <span class="text-light mr-2 d-inline-block username_wrap">hi, 陳庭瑜</span>
            <button type="button" class="btn btn-light logout-button p-0">登出</button>
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
        
    },
    computed: {
        ...mapGetters([
            
        ])
    },
    watch: {
        
    },
    created () {
        
    },
}
</script>