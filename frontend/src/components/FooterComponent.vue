<template>
    <footer class="text-center bg-dark text-light d-flex justify-content-between align-items-center sticky-bottom">
        <AboutModal/>
        <button class="btn btn-primary rounded-0" data-bs-toggle="modal" data-bs-target="#about"><i class="bi bi-c-circle"></i></button>
        <p class="my-0">{{ CartLength }} Kosárelem | Összesen: {{ CartSum}} Ft</p>
        <span></span>
    </footer>
</template>
<style></style>
<script>
    import AboutModal from '../views/AboutModal.vue';
    export default {
        components:{
            AboutModal
        },
        data(){
            return {
                dev: 'Zick Balázs',
                year: new Date().getFullYear(),
                cart: this.cartData
            }
        },
        props:['cartData'],
        name:'FooterComponent',
        computed:{
            CartLength(){
                return this.cart.length
            },
            CartSum(){
                let total = 0;
                for (let i = 0; i < this.cart.length; i++) {
                    total+=this.cart[i].Price
                }
                return total;
            }
        }
    }
</script>