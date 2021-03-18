
export function getRouterName(menu, AllName: string[]) {
    return menu.map((v, i) => {
        if (v.children) {
            getRouterName(v.children, AllName)
        } else {
            AllName.push(v.path);
        }
    });
}

