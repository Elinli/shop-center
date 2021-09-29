import store from '../store';
import {setupRoutes} from './setupRoutes';

export const setupRouter = (router) => {
    if (sessionStorage.getItem('store')) {
        const storageStore = JSON.parse(sessionStorage.getItem('store'));
        store.replaceState(Object.assign({}, store.state, storageStore));
        sessionStorage.removeItem('store');
    }
    const {currentSystem} = store.state;
    currentSystem && setupRoutes(router, store, currentSystem);
    router.beforeEach((to, from, next) => {
        next();
    });
};
