class Cart {
    state = {
        orderCommodity: [],
        totalPrice: 0
    };
    mutations = {
        setOrderCommodity: function(state, orderCommodity) {
            state.orderCommodity = orderCommodity;
        },
        setTotalPrice: function(state, totalPrice) {
            state.totalPrice = totalPrice;
        }
    };
    actions = {
        dispatchOrderCommodity: function({commit},payload) {
            Promise.resolve(payload).then((res) => {
                if (res) {
                    commit('setOrderCommodity', res);
                    commit(
                        'setTotalPrice',
                        res.reduce((pre, cur) => {
                            return pre + cur.num * cur.price;
                        }, 0)
                    );
                }
            });
        }
    };
    getters = {
        orderCommodity(state) {
            return state.orderCommodity;
        },
        totalPrice(state) {
            return state.totalPrice;
        }
    };
}

export default new Cart();
