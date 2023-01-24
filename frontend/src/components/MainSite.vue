<template>
    <main>
        <div id="topinteractions" class="d-flex flex-row justify-content-between">
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#AddModal"><i class="bi bi-plus"></i></button>
            <h1>A kosara</h1>
            <button class="btn btn-danger"><i class="bi bi-trash2-fill"></i></button>
        </div>
        <ModalWindow title="Új kosárelem hozzáadása" id="AddModal" :inputs="AddInputs" :buttons="AddButtons" />
    </main>
</template>
<script>
import ModalWindow from './Modal.vue';
export default{
    name:'MainSite',
    components:{
        ModalWindow
    },
    data(){
        return{
            cartItems: [],
            AddInputs: [
                {
                    name:'Name',
                    title:'Termék neve',
                    type:'text',
                },
                {
                    name:'Description',
                    title:'Leírás',
                    type:'text',
                },
                {
                    name:'Count',
                    title:'Mennyiség',
                    type:'number'
                },
                {
                    name:'egyseg',
                    title:'Egységár',
                    type:'number'
                },
                {
                    name:'Price',
                    title:'Teljes ár',
                    type:'number',
                    disabled:true
                },
                {
                    name:'ImageName',
                    title:'Kép',
                    type:'file'
                }
            ],
            AddButtons:[
                {
                    name:'add',
                    text:'',
                    icon:'plus',
                    type:'success',
                    function:this.AddItem
                }
            ]
        }
    },
    computed:{
        ItemLength(){
            return this.cartItems.length;
        }
    },
    methods:{
        AddItem(data){
            console.log(data);
        }
    }
}
</script>