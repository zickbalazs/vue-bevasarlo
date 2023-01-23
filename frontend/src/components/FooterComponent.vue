<template>
    <footer class="text-center bg-dark text-light">{{ dev }} - {{ year }}</footer>
</template>
<style></style>
<script>
    export default {
        data(){
            return {
                dev: 'Zick Balázs',
                year: new Date().getFullYear()
            }
        },
        name:'FooterComponent'
    }
</script>