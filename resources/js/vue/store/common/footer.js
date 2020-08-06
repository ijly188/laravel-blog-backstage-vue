export default {
    strict: true,
    state: {
        footerMenu: [
            [{
                word: '常見問題',
                link: '/common-problems'
            },
            {
                word: '新手教學',
                link: '/tutor'
            }],
            [{
                word: '關於運動彩券',
                link: '/about-sport-lottery'
            },
            {
                word: '關於' + process.env.MIX_BRANDNAME,
                link: '/about-sport-lottery'
            }],
            [{
                word: '法定揭露事項',
                link: '/about-law'
            },
            {
                word: '服務條款',
                link: '/service'
            },
            {
                word: '隱私權政策',
                link: '/private-policy'
            }],
        ],
        footerContact:[
            {
                name: '線上客服  加LINE@',
                pic_url: '/images/footer__left.jpg'
            },
            {
                name: '線上報明牌專線',
                pic_url: '/images/footer__right.jpg'
            },
        ],
        footerStatement:{
            aboutthiswebsite: '特別聲明:本站所引用的各項數據資訊或商標或名稱，其版權分別屬於各註冊公司所有。',
            aboutlowyer: '法律顧問:正通聯合法律事務所。',
            aboutcopyright: 'Copyright © 2019 Future Third Party Payment Inc.  All rights reserved.'
        }
        
    },
    actions: {
    },
    mutations: {
    },
    getters: {
        footerMenu: state => state.footerMenu,
        footerContact: state => state.footerContact,
        footerStatement: state => state.footerStatement,
    },
};