const login = {
    "success": true,
    "code": "0",
    "message": "",
    "merchantModel": {
        "id": 87,
        "name": "快盈景区目的地",
        "category": "destination",
        "contact": "景区目的地",
        "mobilePhone": "16666666666",
        "email": "",
        "disabled": false,
        "address": "绍兴",
        "province": "浙江省",
        "city": "杭州市",
        "logoUrl": "https://oss.iuctrip.com/test/tesla/merchant/87/ticket/1603522259847bgh1e0gy.png",
        "code": "sxwl",
        "davinciMerchantId": 5067,
        "merchantType": 1
    },
    "merchantUserModel": {
        "id": 116,
        "username": "绍兴文旅开发",
        "loginName": "sxwl01",
        "disabled": false,
        "merchantId": 87,
        "logoUrl": "https://oss.iuctrip.com/test/tesla/merchant/87/user/logo/1561012146025sjs6yu0a.png",
        "mobilePhone": "16666666666",
        "storeId": null,
        "storeName": null,
        "storeType": null,
        "scenicSpotId": null,
        "scenicSpotName": null,
        "ticketChannel": "",
        "scenicSpotIdList": [],
        "roleType": 0,
        "distributorId": null
    },
    "systemTag": "zhjq",
    "merchantConfigModel": {
        "appletModel": 1,
        "weixinDisable": false
    },
    "cptMerchantModel": null,
    "permission": [{
            title: '首页概览',
            children: [{
                    title: '订单概况',
                    children: [{
                        title: '呜呜呜',
                        path: 'home',
                        meta: { //元数据，用来存储额外的自定义信息
                            "operatePermission": [ //页面中的操作权限
                                "123",
                                "234"
                            ]
                        }
                    }, ]
                },
                {
                    title: '数据看板',
                    children: [{
                        title: '哈哈哈',
                        path: 'home1',
                    }, ]
                },

            ]
        },
        {
            title: '订单管理',
            children: [{
                title: '订单操作',
                path: 'order',
            }, ]
        },
        {
            title: '智慧景区系统',
            path: 'https://devol-gateway.iuctrip.com/manage/smart-scenic-v2-web',
        },
    ]
};



exports.login = login;