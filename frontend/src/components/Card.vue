<template>
    <div class="card col-lg-3 col-md-6 col-sm-12">
        <div class="d-flex justify-content-between card-header">
            <h4>{{ item.Name }}</h4>
            <input type="checkbox" class="form-input" v-model="done">
        </div>
        <div class="card-body">
            <img v-if="item.ImageName" class="img-fluid"
                :src="`http://localhost:8080/files/uploads/${item.ImageName}`">
            <p>{{ item.Description }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardComponent',
    props: ['data'],
    data() {
        return{
            item: this.data
        }
    },
}
</script>
<style>

</style>