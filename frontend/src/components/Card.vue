<template>
    <div class="col-lg-3 col-md-6 col-11 mx-auto mx-md-0">
        <div class="card">
            <div class="d-flex justify-content-between card-header" :class="item.isDone? 'text-decoration-line-through':''">
                <div><h4>{{ item.Name }}</h4><h5><small>x</small>{{ item.Count }}</h5></div>
                <input type="checkbox" class="form-input" v-model="item.isDone" v-on:change="finished">
            </div>
            <div class="card-body p-0" :class="item.isDone?'d-none':''">
               <div class="d-flex justify-content-center bg-dark border-bottom border-dark">
                   <img v-if="item.ImageName" class="img-fluid"
                       :src="item.ImageName">
               </div>
               <div class="text p-3">
                   <p>{{ item.Description }}</p>
               </div>
            </div>
            <div class="card-footer d-flex justify-content-between mb-0" :class="item.isDone?'d-none':''">
                <p class="mb-0">{{ item.Price }} Ft</p>
                <p class="mb-0">{{ item.UnitPrice }}Ft/{{ item.Unit }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardComponent',
    props: ['data'],
    data() {
        return{
            item: this.data,
        }
    },
    methods:{
        finished(){

        }
    }
}
</script>
<style>

</style>