import { mapState,mapGetters } from 'vuex';
export default {
    data() {
        return {
            isChangGuanQuanYu: JSON.parse(sessionStorage.isChangGuanQuanYu) //2.75 场馆全域新字段
        };
    },
    computed: {
        ...mapState('permission', ['currentMenu', 'isSidebarNavCollapse','crumbList']),
        ...mapGetters('permission', ['ISWHHZ']),
        ...mapState('common', ['ISDAMAI']),
        ...mapGetters('common', ['ISCHANGGUAN'])


    },
    methods: {
        _title(name){
            let str = name;
            if (this.isChangGuanQuanYu){
                //  2.75 场馆全域
                switch (name){
                case '景点管理':
                    str= '场馆管理';
                    break;
                case '通告设置':
                    str= '场馆通告';
                    break;
                case '游玩攻略':
                    str= '体育资讯';
                    break;
                default:
                    str= name;
                }
            } else if (this.ISCHANGGUAN){
                // 场馆
                switch (name){
                case '多景区模板':
                    str = '首页模板';
                    break;
                case '景点管理':
                    str= '场馆管理';
                    break;
                case '景点检票报表':
                    str= '场馆检票报表';
                    break;
                default:
                    str= name;
                }
            } else if (this.ISDAMAI){
                str= name.replace(/景点/g,'供应商');
            } else if (this.ISWHHZ){
                switch (name){
                case '特色商城':
                    str = '文创产品';
                    break;
                default:
                    str= name;
                }
            } else {
                str= name;
            }
            return str;
        }
    }
};