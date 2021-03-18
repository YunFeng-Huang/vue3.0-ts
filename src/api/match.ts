export function findMatchIndex(map, config) {
    return map.some((item) => {
        return (item.url === config.url && item.method === config.method && diff(item.params, config.params))
    })
}

export function diff(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }
    let obj1Keys = Object.keys(obj1)
    for (let i = 0; i < obj1Keys.length; i++) {
        if (obj1[obj1Keys[i]] !== obj2[obj1Keys[i]]) {
            return false
        }
    }
    return true
}