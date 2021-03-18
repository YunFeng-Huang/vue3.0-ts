
export function getRouterName(menu, AllName: string[]) {
    return menu.map((v, i) => {
        if (v.children) {
            getRouterName(v.children, AllName)
        } else {
            AllName.push(v.path);
        }
    });
}


export function mergeRoutersMeta(menuList, to) {
    menuList.map((v) => {
        if (v.children) {
            mergeRoutersMeta(v.children, to);
        } else {
            if (to.name == v.path) {
                to.meta = {
                    ...to.meta, ...v.meta, ...{ 'title': v.title }
                };
            };
        }
    })
    return menuList;
}
