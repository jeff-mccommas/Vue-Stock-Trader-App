<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-25">
      <template>
        <div>
          <md-card md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">{{stock.name}}</div>
                <div class="md-subhead">{{stock.price}}</div>
              </md-card-header>

              <md-card-content>
                <md-field>
                  <md-input type="number" v-model="quantity" placeholder="Quantity"></md-input>
                </md-field>
              </md-card-content>

              <md-card-actions>
                <md-button @click="buyStock" md-success>Buy</md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
        </div>
      </template>
    </div>
  </div>
</template>



<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>