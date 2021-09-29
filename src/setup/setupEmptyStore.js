export const setupEmptyStore = (store) => {
    store.commit('setRoleMenuList', []);
    store.commit('setSysMenuList', []);
    store.commit('setBreadcrumb', []);
    store.commit('setOpenkeys', []);
    store.commit('setSelectedKeys', []);
    store.commit('setOrderCommodity', []);
    store.commit('setTotalPrice', 0);
    store.commit("setCurrentSystem",'')
};
