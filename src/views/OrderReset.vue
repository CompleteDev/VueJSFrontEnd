<template>
<Modal>
      <div class="modal-content mb-5">
        <div class="row">
          <div class="col-md-12 text-center mb-3">
            <h3>Order Event Log</h3>
          </div>
          <div class="row">
    <div class="col-md-12 p-3">
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
      <tr>
      </tr>
    </tbody>
</table>
    </div>
  </div>
          </div>     
      </div>
</Modal>
<div v-if="showLoadingBox">
  <LoadingBox />
</div>
<div v-if="isLoading">
  <Loading />
</div>
<div v-else class="container mt-5">
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped table-hover" id="resetTable">
    <thead>
      <tr>
        <th>OrderID</th>
        <th>Status</th>
        <th>View JSON </th>
        <th>Reset Order</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="resetOrder in resetTheOrders" :key="resetOrder.headerId">
        <td>{{resetOrder.headerId}}</td>
        <td>{{resetOrder.status}}</td>
        <td><button @click.prevent="ViewJSONModal(resetOrder.headerId)" class="btn btn-primary"><i class="fa-solid fa-eye"></i></button></td>
        <td><button @click.prevent="ResetThisOrder(resetOrder.headerId)" class="btn btn-danger"><i class="fa-solid fa-pen-to-square"></i></button></td>
      </tr>
    </tbody>
</table>
    </div>
  </div>
</div>
    
</template>

<script>

import axios from 'axios'
import Modal from "@/components/Modals/Modal.vue";
import Loading from "@/components/LoadingScreen.vue";
import { ref } from "vue";
import LoadingScreen from '../components/LoadingBox.vue';
import store from '../store';

export default {
  name: 'CHEGGRESET',
  data() {
      return {
           resetTheOrders: [],
           JsonInfo: [],
           isLoading: false,
           showLoadingBox: false,
      }
  },
  components: {
    Modal,
    Loading,
    LoadingScreen
},
  setup() {

  },
  created() {
   this.LoadResetTable()   
  },
  methods: {
    async LoadResetTable(){
      this.isLoading = true;
      const response = axios.get(store.state.BaseURL + 'GetResetOrders')
      this.resetTheOrders = (await response).data
      setTimeout(function (){$("#resetTable").DataTable({"iDisplayLength": 10});

            }, 0);
      this.isLoading = false;
    },
        async ResetThisOrder(orderHeaderId) {
          if(confirm("Reset order!" + ' ' + orderHeaderId) == true)
          {
            const response = await axios.put(store.state.BaseURL + 'UpdateOrderHeaderReset',
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
          this.showLoadingBox = true
          $('#Modal').modal('show');
          this.showLoadingBox = false
        },
  }
}
</script>

<style lang="scss" scoped>

</style>