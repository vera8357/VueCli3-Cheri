<template>
  <div class="row justify-content-center">
      <!-- http://localhost:8084/#/comfirm_order/-M6Vcaz9gKXB9eeLXVb_ -->
  <form class="col-md-6">
    <table class="table">
      <thead>
        <th>品名</th>
        <th>數量</th>
        <th>單價</th>
      </thead>
      <tbody>
        <tr v-for="item in order.products" :key="item.id">
          <td class="align-middle">{{item.product.title}}</td>
          <td class="align-middle">{{item.qty}}/{{item.product.unit}}</td>
          <td class="align-middle text-right">{{item.final_total}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" class="text-right">總計</td>
          <td class="text-right">{{order.total}}</td>
        </tr>
      </tfoot>
    </table>

    <table class="table">
      <tbody>
        <tr>
          <th width="130">Email</th>
          <td>{{order.user.email}}</td>
        </tr>
        <tr>
          <th>姓名</th>
          <td>{{order.user.name}}</td>
        </tr>
        <tr>
          <th>收件人電話</th>
          <td>{{order.user.tel}}</td>
        </tr>
        <tr>
          <th>收件人地址</th>
          <td>{{order.user.address}}</td>
        </tr>
        <tr>
          <th>付款狀態</th>
          <td>
            <span v-if="!order.is_paid">尚未付款</span>
            <span v-else class="text-success">付款完成</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-right" v-if="order.is_paid === false">
      <button class="btn btn-danger" @click="payOrder">確認付款去</button>
    </div>
  </form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      orderId: '',
      order: {
        user: {}
      }
    }
  },
  methods: {
    getOrder () {
      let vm = this
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`
      vm.$http.get(url).then(res => {
        vm.order = res.data.order
      })
    },
    payOrder () {
      let vm = this
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`
      vm.$http.post(url).then(res => {
        if (res.data.success) {
          vm.getOrder()
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.id
    this.getOrder()
  }
}
</script>

<style lang='scss' scoped>

</style>
