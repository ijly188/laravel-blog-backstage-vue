export default {
    strict: true,
    state: {
        error: '',
        isLoading: false,
        messages: [
            // {
            //     message: '訊息內容',
            //     status: 'danger',
            //     timestamp: 123,
            // }
        ],
        isErrorModalshow: false,
    },
    actions: {
        updateLoading(context, status) {
            context.commit('UPDATELOADING', status);
        },
        updateMessage(context, { message, status }) {
          context.dispatch('removeMessageWithTiming', { message, status });
        },
        removeMessageWithTiming(context, status) {
          context.commit('REMOVEMESSAGESWITHTIMING', status);
          setTimeout(() => {
            context.commit('REMOVEMESSAGES', status);
          }, 5000);
        },
        removeMessage(context, num) {
          context.commit('REMOVEMESSAGES', num);
        },
    },
    mutations: {
        UPDATELOADING(state, status) {
            state.isLoading = status;
        },
        REMOVEMESSAGESWITHTIMING(state, status) {
          const timestamp = Math.floor(new Date() / 1000);
          state.messages.push({
            message: status.message,
            status: status.status,
            timestamp,
          });
        },
        REMOVEMESSAGES(state, num) {
          state.messages.splice(num, 1);
        },
    },
    getters: {
        error:state => state.error,
        isLoading: state => state.isLoading,
        messages: state => state.messages,
        isErrorModalshow: state => state.isModalshow,
    },
};