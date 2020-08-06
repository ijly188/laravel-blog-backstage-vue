<template>
    <div class="index_wrap">
        <Alert></Alert>
        <Loading :active.sync="isLoading"></Loading>
        <router-view></router-view>
    </div>
</template>

<script>
import Alert from '../components/Alert';

import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
        Alert
    },
    computed: {
        ...mapGetters([
            'isLoading'
        ]),
    },
    destroyed() {  },
}
</script>