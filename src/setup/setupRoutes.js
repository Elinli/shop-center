import {depthErgodicityFindKey} from '../utils/depth';
import {staticMenuData} from '../utils/menu';

export const setupRoutes = (router, store, filename) => {
    const routerConfigure = import(`@/router/${filename}`);
    routerConfigure
        .then(async (res) => {
            const {routes} = res;
            routes && (await router.addRoute(routes));
            let currentSelected = depthErgodicityFindKey(
                staticMenuData,
                store.state.app.selectedKeys[0]
            );
            currentSelected ? router.push(currentSelected.path) : router.push('/workbench');
        })
        .catch((err) => {
            return err;
        });
};
