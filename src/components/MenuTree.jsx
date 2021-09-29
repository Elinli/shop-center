import {defineComponent, reactive, watch} from 'vue';
import {useStore} from 'vuex';
import {Menu} from 'ant-design-vue';
const {Item, SubMenu} = Menu;
import {useRouter, useRoute} from 'vue-router';
import {depthFlatData} from 'u/depth';
import {Icon} from '@/setup/setupIcon';
import {staticMenuData} from '@/utils/menu';
import {sort} from 'u/util';
import {setupBreadcrumb} from '@/setup/setupBreadcrumb';

export const MenuTree = defineComponent({
    name: 'MenuTree',
    components: {},
    setup() {
        const renderIcon = (icon = undefined) => {
            return icon && <Icon {...{icon}} />;
        };
        const renderMenuItem = (menuItem = {}) => {
            return (
                <Item
                    {...{key: menuItem.key, icon: renderIcon(menuItem.icon), path: menuItem.path}}
                >
                    <slot name="title">{menuItem.title}</slot>
                </Item>
            );
        };
        const renderSubMenu = (menuItem) => (
            <SubMenu
                {...{key: menuItem.key, icon: renderIcon(menuItem.icon), title: menuItem.title}}
            >
                {renderMenu(menuItem.children)}
            </SubMenu>
        );
        const renderMenu = (menuList = []) => {
            const on = {
                onSelect: onMenuSelect,
                onClick: onMenuClick,
                onOpenChange: onOpenChange
            };
            const props = {
                openKeys: menuKeys.openKeys,
                selectedKeys: menuKeys.selectedKeys
            };
            return (
                <Menu {...{...on, ...props}} style={{width: 256}} mode="inline" theme="light">
                    {menuList.map((menuItem) => {
                        if (menuItem.children && menuItem.children.length) {
                            return renderSubMenu(menuItem);
                        } else return renderMenuItem(menuItem);
                    })}
                   
                </Menu>
            );
        };
        const router = useRouter();
        const route = useRoute();
        const store = useStore();
        const flatMenu = depthFlatData(staticMenuData);
        const onMenuClick = function(event) {
            const {item, keyPath} = event;
            let breadcrumb = flatMenu
                .filter((item) => keyPath.includes(item.key))
                .map((item) => {
                    return {
                        key: item.key,
                        meta: item.meta,
                        path: item.path,
                        title: item.title
                    };
                });
            store.commit('setBreadcrumb', breadcrumb);
            if (item.path) router.replace(item.path);
        };
        const onMenuSelect = function(event) {
            const {selectedKeys: sKeys} = event;
            menuKeys.selectedKeys = sKeys;
            store.commit('setSelectedKeys', sKeys);
        };
        const onOpenChange = (openKeys) => {
            const latestOpenKey = openKeys.find((key) => menuKeys.openKeys.indexOf(key) === -1);
            if (menuKeys.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                menuKeys.openKeys = openKeys;
            } else {
                menuKeys.openKeys = latestOpenKey ? [latestOpenKey] : [];
            }
            store.commit('setOpenkeys', menuKeys.openKeys);
        };
        const menuKeys = reactive({
            openKeys: [],
            selectedKeys: [],
            rootSubmenuKeys: []
        });
        menuKeys.rootSubmenuKeys = flatMenu
            .filter(
                (item) => item.children && item.children.length && item.meta.parentKey === 'root'
            )
            .map((iitem) => iitem.key);
        menuKeys.selectedKeys = store.state.app?.selectedKeys?.length
            ? store.state.app.selectedKeys
            : [flatMenu.find((item) => item.path === '/workbench').key];
        menuKeys.openKeys = store.state.app.openKeys || [];
        setupBreadcrumb(store, staticMenuData, menuKeys.selectedKeys.at(-1));

        watch(
            () => route.path,
            () => {
                const selectedItem = flatMenu.find((item) => item.path === route.path);
                if (selectedItem) {
                    menuKeys.selectedKeys = [selectedItem.key];
                    store.commit('setSelectedKeys', menuKeys.selectedKeys);
                }
            }
        );
        return () => <div>{renderMenu(sort(staticMenuData))}</div>;
    }
});
