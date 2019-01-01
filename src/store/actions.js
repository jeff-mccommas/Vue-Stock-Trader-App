import Vue from 'vue';

export const loadData = ({
    commit
}) => {
    Vue.axios.get('https://vuejs-stock-trader-c806f.firebaseio.com/stocks.json')
        // .then(response => response.json())
        .then(data => {
            if (data) {
                const stocks = data.data.stocks;
                const funds = data.data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds,
                };

                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        });
};