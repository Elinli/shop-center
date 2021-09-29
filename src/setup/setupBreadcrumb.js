import {depthFuncFindAllParent} from '../utils/depth';

export const setupBreadcrumb = (store, staticData, uniqueKey) => {
    const breadcrumb = depthFuncFindAllParent(staticData, uniqueKey).map((item) => {
        return {
            key: item.key,
            meta: item.meta,
            path: item.path,
            title: item.title
        };
    });

    store.commit('setBreadcrumb', breadcrumb);
};
