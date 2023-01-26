<template>
    <div class="modal fade" :id="this.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ this.title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3" v-for="input in this.inputs" :key="input.name"
                        :class="input.groupinput ? 'input-group' : ''">
                        <label :for="input.name" class="form-label">{{ input.title }}<span
                                class="text-danger fw-bold">{{ input.required ? "*" : "" }}</span></label>
                        <input :accept="input.type === 'file' ? 'image/*' : false" :type="input.type"
                            :multiple="input.type === 'file' ? true : false" :name="input.name"
                            :placeholder="input.placeholder" v-model="data[input.name]"
                            :id="input.type == 'file' ? 'file' : false" class="form-control">
                        <span v-if="input.groupinput" class="input-group-text">/</span>
                        <template v-if="input.groupinput">
                            <input class="form-control" :type="input.groupinput.type"
                                :name="input.groupinput.name" :placeholder="input.groupinput.placeholder" v-model="data[input.groupinput.name]" >
                        </template>
                    </div>
                </div>
                <div class="modal-footer">
                    <template v-for="button in this.buttons">
                        <button @click="() => { button.function(data); }" :key="button.name"
                            :class="'btn btn-' + button.type">{{ button.text }} <i v-if="button.icon"
                                :class="'bi bi-' + button.icon"></i></button>
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
            data: {
            }
        }
    }
}
</script>
<style>

</style>