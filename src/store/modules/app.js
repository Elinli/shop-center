class App {
    static state = {
        roleMenuList: [],
        sysMenuList: [],
        breadcrumb: [],
        openKeys:[],
        selectedKeys:[]
    };
    mutations = {
        setRoleMenuList(state, roleMenuList) {
            state.roleMenuList = roleMenuList;
        },
        setSysMenuList(state, sysMenuList) {
            state.sysMenuList = sysMenuList;
        },
        setBreadcrumb(state, breadcrumb) {
            state.breadcrumb = breadcrumb;
        },
        setOpenkeys(state, openKeys){
            state.openKeys = openKeys;
        },
        setSelectedKeys(state, selectedKeys){
            state.selectedKeys = selectedKeys
        }
    };
    actions = {
        dispatchMenuList({commit}, payload) {
            commit('setRoleMenuList', payload);
            commit('setSysMenuList', payload);
        }
    };
    getters = {
        roleMenuList: (state) => state.roleMenuList,
        sysMenuList: (state) => state.sysMenuList,
        breadcrumb: (state) => state.breadcrumb
    };
}

export default new App();
