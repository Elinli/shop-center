import {createStore} from 'vuex';
import cart from './modules/cart';
import app from './modules/app';
export default createStore({
    state: {
        currentSystem: '',
        userinfo: {}
    },
    mutations: {
        setCurrentSystem: function(state, currentSystem) {
            state.currentSystem = currentSystem;
        },
        setUserinfo: function(state, userinfo) {
            state.userinfo = userinfo;
        }
    },
    actions: {
        dispatchUserinfo({commit}, payload) {
            Promise.resolve(payload)
                .then((res) => {
                    const {userinfo} = res.json();
                    commit('setUserinfo', userinfo);
                })
                .catch((err) => err);
        }
    },
    modules: {
        cart,
        app
    },
    getters: {
        currentSystem: (state) => state.currentSystem,
        userinfo: (state) => state.userinfo
    }
});
