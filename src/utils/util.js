// 排序
export const sort = (sortData, sortKey = 'orderNo') =>
    sortData.sort((a, b) => a[sortKey] - b[sortKey]);

// 深拷贝
export const deepClone = (origin, target) => {
    return target;
};

// 浅拷贝
export const shallowClone = (origin) => {
    return Object.assgin({}, origin);
};

// 过滤
export const filter = (filterData = [], filterKey, filterCondition) => {
    return filterData.filter((filterItem) => filterItem[filterKey] === filterCondition);
};

// 去重
export const unrepeat = (repeatData, uniqueKey) => {
    let tempObj = [];
    return repeatData.reduce((pre, cur) => {
        tempObj[pre[uniqueKey]] ? '' : (tempObj[pre[uniqueKey]] = true && pre.push(cur));
    }, []);
};
