<template>
    <div class="modal text-black" id="about" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">About</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><i class="bi bi-c-circle"></i> {{ dev }}</p>
                    <p><i class="bi bi-calendar"></i> {{ year }}</p>
                    <p><a :href="github"><i class="bi bi-github"></i></a></p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>

export default {
    name:'AboutModal',
    data() {
        return {
            dev: 'Zick Balázs',
            year: new Date().getFullYear(),
            github: 'https://github.com/zickbalazs/vue-bevasarlo'
        }
    }
}
</script>