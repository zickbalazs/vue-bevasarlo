<template>
    <div class="modal fade" :id="this.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ this.title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3" v-for="input in this.inputs" :key="input.name">
                        <label :for="input.name" class="form-label">{{ input.title }}</label>
                        <input :accept="input.type==='file' ? 'image/*' : false " :type="input.type" :name="input.name" v-model="data[input.name]" :disabled="input.disabled" class="form-control">
                    </div>
                </div>
                <div class="modal-footer">
                    <template v-for="button in this.buttons">
                        <button @click="() => { button.function(data); }" :key="button.name" :class="'btn btn-'+button.type">{{ button.text }} <i v-if="button.icon" :class="'bi bi-'+button.icon"></i></button>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ModalWindow',
    props: ['title', 'inputs', 'buttons', 'id'],
    data() {
        return {
            data:{}
        }
    },
    
}
</script>
<style>

</style>