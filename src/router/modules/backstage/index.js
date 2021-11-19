import {staticMenuData} from '@/utils/menu';

const permissionFiles = staticMenuData.filter((item) => item.name).map((item) => item.name);
const modulesFiles = require.context('../backstage', true, /.js$/);

export const modules = modulesFiles.keys().reduce((premodules, curmodule) => {
    const moduleName = curmodule.replace(/^.\/(.*)\.js/, '$1');
    if (moduleName === 'index') return premodules;
    if (!permissionFiles.includes(moduleName)) return premodules;
    const value = modulesFiles(curmodule);
    premodules[moduleName] = value[moduleName];
    return premodules;
}, {});
