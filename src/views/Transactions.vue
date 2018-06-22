/**
* @file
* Contains implementation of Transactions view component.
*/

<template>
  <div class="about">
    <el-button
      type="success"
      @click="startWatchTransactions()">Start</el-button>
    <el-button
      type="warning"
      @click="stopWatchTransactions()">Stop</el-button>
    <el-button
      type="danger"
      @click="resetTransactionsTableData()">Reset</el-button>

    <h2>Sum: {{ animatedTransactionSum }}</h2>

    <el-table
        :data="transactionData"
        border
        empty-text="Table is empty"
        height="300"
        style="width: 100%">
      <el-table-column
        prop="from"
        label="From">
      </el-table-column>
      <el-table-column
        prop="to"
        label="To">
      </el-table-column>
      <el-table-column
        prop="sum"
        label="Sum">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
import TweenLite from 'gsap/TweenLite'

// Install plugin VueNativeSock and subscribe on 'blockchain' socket.
Vue.use(VueNativeSock, 'wss://ws.blockchain.info/inv', { format: 'json' })

export default {
  data () {
    return {
      transactionData: [],
      transactionSum: 0,
      tweenedTransactionSum: 0
    }
  },
  computed: {
    animatedTransactionSum: function () {
      // Remove fixed-point notation.
      return this.tweenedTransactionSum.toFixed(0)
    }
  },
  watch: {
    /**
     * Animate transaction summary number.
     * @param {number} newValue
     *   New value.
     */
    transactionSum: function (newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedTransactionSum: newValue })
    }
  },
  methods: {
    /**
     * Start watching transactions from web socket.
     */
    startWatchTransactions () {
      this.$socket.sendObj({'op': 'unconfirmed_sub'})
      this.$options.sockets.onmessage = (data) => {
        const transactionData = JSON.parse(data.data).x
        const output = {
          from: transactionData.inputs[0].prev_out.addr,
          to: transactionData.out[0].addr,
          sum: transactionData.tx_index
        }
        this.transactionData.unshift(output)
        this.transactionSum = this.transactionSum + output.sum
      }
    },
    /**
     * Stop watching transactions from web socket.
     */
    stopWatchTransactions () {
      this.$socket.sendObj({'op': 'unconfirmed_unsub'})
    },
    /**
     * Clear transactions data.
     */
    resetTransactionsTableData () {
      this.transactionData = []
      this.transactionSum = 0
    }
  }
}
</script>
