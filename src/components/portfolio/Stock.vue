<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-25">
      <template>
        <div>
          <md-card md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">{{stock.name}}</div>
                <div class="md-subhead">{{ stock.price }} | Quantity: {{ stock.quantity }})</div>
              </md-card-header>

              <md-card-content>
                <md-field>
                  <md-input type="number" v-model.number="quantity">placeholder="Quantity"></md-input>
                </md-field>
              </md-card-content>

              <md-card-actions>
                <md-button
                  class="md-active md-primary md-alignment-center-right"
                  @click="buystock"
                >Buy</md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
        </div>
      </template>
    </div>
  </div>
</template>



<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>
<style >
.md-card.md-theme-default.md-with-hover {
  margin-top: 10px !important;
}
.md-card-header + .md-card-content {
  padding-top: 0;
}
.md-card-header:first-child > .md-title:first-child {
  margin-top: 0px;
}
.md-card-header {
  padding: 0px;
  background-color: #9c27b0 !important;
  margin-top: 0px;
  padding: 0px !important;
  height: 40px !important;
}
.md-card .md-title {
  font-size: 24px;
  letter-spacing: 0 !important;
  line-height: 26px !important;
  color: #fff !important;
  padding: 3px 0 3px 12px !important;
}
.md-card .md-subhead {
  line-height: 35px !important;
}
</style>