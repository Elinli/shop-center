export const sort = (sortData, sortKey = 'orderNo') =>
    sortData.sort((a, b) => a[sortKey] - b[sortKey]);
