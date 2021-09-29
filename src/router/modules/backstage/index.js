const modulesFiles = require.context('../backstage', true, /.js$/);
export const modules = modulesFiles.keys().reduce((premodules, curmodule) => {
    const moduleName = curmodule.replace(/^.\/(.*)\.js/, '$1');
    if (moduleName === 'index') {
        return premodules;
    }
    const value = modulesFiles(curmodule);
    premodules[moduleName] = value[moduleName];
    return premodules;
}, {});
