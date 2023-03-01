<template>
<div class="container mt-5">
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>OrderID</th>
        <th>Partner Order ID</th>
        <th>View JSON </th>
        <th>Reset Order</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="resetOrder in resetTheOrders" :key="resetOrder.id">
        <td>{{resetOrder.id}}</td>
        <td>{{resetOrder.partnerOrderId}}</td>
        <td><button @click.prevent="ViewJSONModal(resetOrder.id)" class="btn btn-primary"><i class="fa-solid fa-eye"></i></button></td>
        <td><button @click.prevent="ResetThisOrder(resetOrder.id)" class="btn btn-danger"><i class="fa-solid fa-pen-to-square"></i></button></td>
      </tr>
    </tbody>
</table>
    </div>
  </div>
</div>
    
</template>

<script>

import axios from 'axios'



export default {
  name: 'CHEGGRESET',
  data() {
      return {
           resetTheOrders: [],
           JsonInfo: []
      }
  },
  async created() {
      const response = axios.get('https://localhost:44354/GetResetOrders')
      this.resetTheOrders = (await response).data
  },
  methods: {
        async ResetThisOrder(orderHeaderId) {
          if(confirm("Reset order!" + ' ' + orderHeaderId) == true)
          {
            const response = await axios.put('https://localhost:44354/UpdateOrderHeaderReset',
            {
              id: orderHeaderId,
              header: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
              }
            })
          }
          else
          {
            alert('Reset Cancelled')
          }
            
        },
        ViewJSONModal(id) {
          alert("Show JSON Modal" + ' ' + id)
        },
  }
}
</script>

<style lang="scss" scoped>

</style>