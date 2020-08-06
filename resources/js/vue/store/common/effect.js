export default {
    strict: true,
    state: {
        error: '',
        isLoading: false,
        messages: [
            // {
            // message: '訊息內容',
            // status: 'danger',
            // timestamp: 123,
            // }
        ],
        isModalshow: false,
    },
    actions: {
        updateLoading(context, status) {
            context.commit('UPDATELOADING', status);
        },
    },
    mutations: {
        UPDATELOADING(state, status) {
            state.isLoading = status;
        },
    },
    getters: {
        error:state => state.error,
        isLoading: state => state.isLoading,
        messages: state => state.messages,
        isModalshow: state => state.isModalshow,
    },
};