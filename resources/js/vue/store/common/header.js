export default {
    strict: true,
    state: {
        headerMenu: [
            {
                word: '賽前投注',
                link: '/sport-betting'
            },
            {
                word: '場中投注',
                link: '/live-betting'
            },
            {
                word: '賽事結果',
                link: '/games-results'
            },
        ],
        isMarqueeshow: true,
        marqueeContent: '我是跑馬燈，我是跑馬燈，我是跑馬燈，我是跑馬燈，我是跑馬燈，我是跑馬燈，我是跑馬燈，我是跑馬燈，我是跑馬燈，我是跑馬燈，我是跑馬燈。',
        isLoginModalshow: false,
        isForgetpasswordModalshow: false,
    },
    actions: {
    },
    mutations: {
    },
    getters: {
        headerMenu: state => state.headerMenu,
        isMarqueeshow: state => state.isMarqueeshow,
        marqueeContent: state => state.marqueeContent,
        isLoginModalshow: state => state.isLoginModalshow,
        isForgetpasswordModalshow: state => state.isForgetpasswordModalshow,
    },
};