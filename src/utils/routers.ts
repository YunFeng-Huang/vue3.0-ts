
export function getRouterName(menu, AllName: string[]) {
    return menu.map((v, i) => {
        AllName.push(v.path);
        if (v.children) {
            getRouterName(v.children, AllName)
        }
    });
}

