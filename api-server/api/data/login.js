const Mock = require('mockjs')
const login = {
    "success": true,
    "code": "0",
    "permission": [{
            title: '订单管理',
            children: [{
                title: '订单操作',
                path: 'order',
            }, ]
        },
        {
            title: '智慧景区系统',
            path: 'https://dev-gateway.iuctrip.com/manage/smart-scenic-v2-web',
        },
        // {
        //     title: '首页概览',
        //     children: [{
        //             title: '订单概况',
        //             children: [{
        //                 title: '呜呜呜',
        //                 path: 'home',
        //                 meta: { //元数据，用来存储额外的自定义信息
        //                     "operatePermission": [ //页面中的操作权限
        //                         "123",
        //                         "234"
        //                     ]
        //                 }
        //             }, ]
        //         },
        //         {
        //             title: '数据看板',
        //             children: [{
        //                 title: '哈哈哈',
        //                 path: 'home1',
        //             }, ]
        //         },

        //     ]
        // },
    ]
};

const merchants = () => {
    return Mock.mock({
        "success": true,
        "code": "0",
        "data|12": [{
            "id": "@id",
            "merchant": "@ctitle(3, 6)",
        }]
    })
}


exports.login = login;
exports.merchants = merchants;