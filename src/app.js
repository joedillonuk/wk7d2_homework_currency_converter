import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      AllCurrencies: {},
      amount: null,
      currencyOne: null,
      picked: null,
    },
    computed: {

    },
    mounted(){
      this.getCurrencies()
    },
    methods: {
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(currencies => this.AllCurrencies = currencies.rates)
      },
    }
  })
})
