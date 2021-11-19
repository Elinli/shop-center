import store from '../store';
import {setupRoutes} from './setupRoutes';

export const setupRouter = async (router) => {
    if (sessionStorage.getItem('store')) {
        const storageStore = JSON.parse(sessionStorage.getItem('store'));
        store.replaceState(Object.assign({}, store.state, storageStore));
        sessionStorage.removeItem('store');
    }
    const {currentSystem} = store.state;
    currentSystem && (await setupRoutes(router, store, currentSystem));
    router.beforeEach((to, from, next) => {
        next();
    });
};
