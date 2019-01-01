import { firebaseAction } from 'vuexfire';

const state = {
  stocks: [],
};

const mutations = {
  RND_STOCKS(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  },
  SET_STOCKS(state, stocks) {    
    state.stocks = stocks;
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },
  setStocksRef: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef('stocks', ref);
  }),
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  },
};

const getters = { stocks: state => state.stocks };

export default {
  state,
  mutations,
  actions,
  getters,
};
