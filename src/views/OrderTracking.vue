<template>

<FSModal>
  <template v-slot:fsTittle>
    Order Tracking
  </template>
  <template v-slot:fsBody>
      <div class="modal-content mb-5">

          <form class="p-3 mb-2">
            <div class="row">
              <div class="col-md-4">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" :readonly="readonly" v-model="OrderDetails.firstName">
              </div>
              <div class="col-md-4">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="firstName" :readonly="readonly" v-model="OrderDetails.lastName">
              </div>
              <div class="col-md-4">

              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-4">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" :readonly="readonly" v-model="OrderDetails.streetAddress">
              </div>
              <div class="col-md-3">
                <label for="city" class="form-label">City</label>
                <input type="text" class="form-control" id="city" :readonly="readonly" v-model="OrderDetails.city">
              </div>
              <div class="col-md-1">
                <label for="state" class="form-label">State</label>
                <input type="text" class="form-control" id="state" :readonly="readonly" v-model="OrderDetails.state">
              </div>
              <div class="col-md-2">
                <label for="zipcode" class="form-label">Zip Code</label>
                <input type="text" class="form-control" id="zipcode" :readonly="readonly" v-model="OrderDetails.zipCode">
              </div>
              <div class="col-md-2">
                <label for="country" class="form-label">Country</label>
                <input type="text" class="form-control" id="country" :readonly="readonly" v-model="OrderDetails.customerCountry">
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-3">
                <label for="ponumber" class="form-label">PO Number</label>
                <input type="text" class="form-control" id="country" :readonly="readonly" v-model="OrderDetails.poNumber">
              </div>
              <div class="col-md-3">
                <label for="carrier" class="form-label">Carrier</label>
                <input type="text" class="form-control" id="carrier" :readonly="readonly" v-model="OrderDetails.description">
              </div>
              <div class="col-md-3">
                <label for="shipMethod" class="form-label">Ship Method</label>
                <input type="text" class="form-control" id="shipMethod" :readonly="readonly" v-model="OrderDetails.shipMethod">
              </div>
            </div>
            </form>
            <div class="row">
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button v-if="!editMode" @click.prevent="toggleEdit" class="btn btn-warning me-md-2"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                <div v-else>
                  <button @click.prevent="toggleEdit" class="btn btn-success me-md-2"><i class="fa-solid fa-floppy-disk"></i> Save</button>
                  <button @click.prevent="toggleCancel" class="btn btn-primary me-md-2"><i class="fa-solid fa-rectangle-xmark"></i> Cancel</button>
                </div>               
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12 text-center">
                <h3>Order History</h3>
              </div>
            </div>
            <div class="row">
    <div class="col-md-12 p-3">
      <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Status</th>
        <th>Info</th>
        <th>Date</th>
      </tr>
        </thead>
          <tbody>
                <tr v-for="Event in OrderEvent" :key="Event.orderEventID">
                    <td>{{ Event.itemStatus }}</td>
                      <td>{{ Event.orderInfo }}</td>
                      <td>{{ Event.eventDate }}</td>
                </tr>
          </tbody>
      </table>
    </div>
  </div>
  <div class="row mt-3">
              <div class="col-md-12 text-center">
                <h3>Order Lines</h3>
              </div>
            </div>
    <div class="row">
    <div class="col-md-12 p-3">
      <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>History</th>
        <th>Line ID</th>
        <th>UPC</th>
        <th>Title</th>
        <th>Requested Qty</th>
        <th>Tracking #</th>
        <th>Order Line Status</th>
        <th>Edit</th>
      </tr>
        </thead>
          <tbody>
                <tr v-for="OrderLineDetail in OrderLineDetails" :key="OrderLineDetail.orderLineId">
                   <td><button @click.prevent="LoadOrderLineHistory(OrderLineDetail.orderLineId)" class="btn btn-primary"><i class="fa-solid fa-timeline"></i></button></td>
                    <td>{{ OrderLineDetail.orderLineId }}</td>
                    <td>{{ OrderLineDetail.sku }}</td>
                    <td>{{ OrderLineDetail.productTitle }}</td>
                    <td>{{ OrderLineDetail.requestedQuantity }}</td>
                    <td>{{ OrderLineDetail.trackingNumber }}</td>
                    <td>{{ OrderLineDetail.itemStatus }}</td>
                    <td><button @click.prevent="editOrderLine" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button></td>
                </tr>
          </tbody>
      </table>
    </div>
  </div>  
  <div v-for="rFileInfo in RouteFileInfo" :key="rFileInfo.customdata2" class="p-3">
    <div class="row">
      <div class="col-md-2">
                <label for="invNumber" class="form-label">Invoice Number</label>
                <input type="text" class="form-control" id="invNumber" readonly v-model="rFileInfo.invoice_number">
              </div>
              <div class="col-md-2">
                <label for="intemNumber" class="form-label">Item Number</label>
                <input type="text" class="form-control" id="intemNumber" readonly v-model="rFileInfo.item_no">
              </div>
              <div class="col-md-2">
                <label for="batchNum" class="form-label">Batch Number</label>
                <input type="text" class="form-control" id="batchNum" readonly v-model="rFileInfo.batch_no">
              </div>
              <div class="col-md-2">
                <label for="statusDesc" class="form-label">Status</label>
                <input type="text" class="form-control" id="statusDesc" readonly v-model="rFileInfo.state_descr">
              </div>  
              <div class="row mt-2">
                <div class="col-md-12">
                  <label for="itemDesc" class="form-label">Description</label>
                  <input type="text" class="form-control" id="itemDesc" readonly v-model="rFileInfo.item_description">
                </div>
              </div>
    </div> 
  </div>
    
  </div>
  </template>
  <template v-slot:fsButton>
    <button @click.prevent="closeTheModal" type="button" class="btn btn-primary"><i class="fa-solid fa-circle-xmark"></i> Close</button>
  </template>
</FSModal>
<LargeModal>
  <template v-slot:lgTittle>
    Order Line
  </template>
</LargeModal>
<OrderLineHistoryModal>
  <template v-slot:lgTittle>
    Order Line History
  </template>
  <template v-slot:lgBody>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped table-hover" id="OrderLineHistoryTable">
          <thead>
            <tr>
              <th>Status</th>
              <th>Info</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="History in OrderLineHistory" :key="History.historyID">
               <td>{{ History.itemStatus }}</td>
               <td>{{ History.info }}</td>
               <td>{{ History.historyDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
</OrderLineHistoryModal>
<div v-if="showLoadingBox">
  <LoadingBox />
</div>
<div v-if="isLoading">
  <Loading />
</div>
<div v-else class="container mt-5">
  <div class="row">
    <div class="col-md-12">
      
      <table class="table table-striped table-hover" id="orderTable">
    <thead>
      <tr>
        <th>Order Info</th>
        <th>OrderID</th>
        <th>Order Status</th>
        <th>Must Ship Date</th>
        <th>Created Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="OrderHeader in GetOrderHeaders" :key="OrderHeader.headerId">
        <td><button @click.prevent="ViewOrderLines(OrderHeader.headerId)" class="btn btn-primary"><i class="fa-solid fa-circle-info"></i></button></td>
        <td>{{OrderHeader.headerId}}</td>
        <td>{{OrderHeader.itemStatus}}</td>
        <td>{{OrderHeader.mustShipDate}}</td>
        <td>{{OrderHeader.sentDate}}</td>
      </tr>
    </tbody>
    
</table>
    </div>
  </div>
</div>
</template>

<script>

import axios from 'axios'
import FSModal from "@/components/Modals/fullScreenModal.vue";
import LargeModal from '@/components/Modals/largeModal.vue';
import OrderLineHistoryModal  from '@/components/Modals/OrderLineHistoryModal.vue';
import Loading from "@/components/LoadingScreen.vue";
import LoadingBox from "@/components/LoadingBox.vue";
import { ref } from "vue";
import store from '../store';


export default {
  name: 'OrderTracking',
  components: {
    FSModal,
    Loading,
    LoadingBox,
    LargeModal,
    OrderLineHistoryModal,

  },
  data() {
      return {
          GetOrderHeaders: [],
          OrderLineDetails: [],
          OrderDetails: [],
          RouteFileInfo: [],
          OrderEvent: [],
          OrderLineHistory: [],
          isLoading: false,
          showLoadingBox: false,
          activeModal: false,
          readonly: true,
          editMode: false,

      }
  },
  created() {
    this.LoadOrderTable()
  },
  computed: {
  },
  methods: {
    toggleEdit()
    {
      this.editMode = !this.editMode;
      this.readonly = !this.readonly;
    },
    toggleCancel()
    {
      if(confirm('All changes will be lost! Do you want to continue?') == true)
      {
        this.editMode = !this.editMode;
        this.readonly = !this.readonly;
      }
    },
    saveCustInfo()
    {
      this.editMode = !this.editMode;
    },
    closeTheModal(){
      if(this.editMode)
      {
        if(confirm('Changes have been made and not saved. All will be lost! Do you want to continue?') == true)
        {
          this.readonly = true;
          this.editMode = false;
          $('#fullScreenModal').modal('hide');
        }
      }
      else{
        $('#fullScreenModal').modal('hide');
      }
    },
    editOrderLine(){
      $('#largeModal').modal('show');
    },
    async LoadOrderLineHistory(ID) {
      this.showLoadingBox = true
      const response = axios.get(store.state.BaseURL + 'GetOrderLineHistory/' + ID)
      this.OrderLineHistory = (await response).data
      this.showLoadingBox = false
      $('#OrderLineHistoryModal').modal('show')
    },
    async LoadOrderTable()
    {
      this.isLoading = true
      const response = axios.get(store.state.BaseURL + 'OrderHeaders')
      this.GetOrderHeaders = (await response).data
      setTimeout(function (){$("#orderTable").DataTable({"order": [[1, "asc"]],"iDisplayLength": 10});

            }, 0);
      this.isLoading = false;
      
      
    },
    async ViewOrderLines(ID)
    {
      this.showLoadingBox = true
      const response = axios.get(store.state.BaseURL + 'OrderLines/' + ID)
      this.OrderLineDetails = (await response).data

      this.GetOrderEvents(ID)
    },
    async GetOrderEvents(ID)
    {
      const response = axios.get(store.state.BaseURL + 'GetOrderEvents/' + ID)
      this.OrderEvent = (await response).data

      this.GetOrderDetails(ID)
    },
    async GetOrderDetails(ID)
    {
      const response = axios.get(store.state.BaseURL + 'GetOrderDetails/' + ID)
      this.OrderDetails = (await response).data

      this.GetRouteInfo(ID)
    },
    async GetRouteInfo(ID)
    {
      const response = axios.get(store.state.BaseURL + 'GetRoutFileInfo/' + ID)
      this.RouteFileInfo = (await response).data

      this.showLoadingBox = false
      $('#fullScreenModal').modal('show');
    }
         
  }
}
</script>

<style lang="scss" scoped>

</style>