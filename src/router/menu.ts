// 这份文件给后端, 菜单结构，前端只需添加title，path(路由中的name)，具体路由配置在路由表修改，后端自由组合返回给前端
export default [
    {
        title: '首页概览',
        children: [
            {
                title: '订单概况',
                path: 'home5',
                children: [
                    {
                        title: '呜呜呜',
                        path: 'home5',
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
                path: 'home',
                children: [{
                    title: '哈哈哈',
                    path: 'home4',
                },]
            },

        ]
    },
    {
        title: '目的地管理',
        path: 'home1',
        children: [
            {
                title: '嘻嘻嘻',
                path: 'home',
            },
        ]
    },
    {
        title: '关联小程序',
        path: 'home3',
    },


]