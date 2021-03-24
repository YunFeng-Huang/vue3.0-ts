// 这份文件给后端, 菜单结构，前端只需添加title，path(路由中的一级name)，具体路由配置在路由表修改，后端自由组合返回给前端
export default [
    {
        title: '首页概览',
        children: [
            {
                title: '订单概况',
                children: [
                    {
                        title: '呜呜呜',
                        path: 'home',
                        meta: { //元数据，用来存储额外的自定义信息
                            "operatePermission": [  //页面中的操作权限
                                "123",
                                "234"
                            ]
                        }
                    },
                ]
            },
            {
                title: '数据看板',
                children: [{
                    title: '哈哈哈',
                    path: 'home4',
                },]
            },

        ]
    },
    {
        title: '订单管理',
        children: [
            {
                title: '订单操作',
                path: 'order',
            },
        ]
    },
    {
        title: '智慧景区系统',
        path: 'https://devol-gateway.iuctrip.com/manage/smart-scenic-v2-web',
    },
]