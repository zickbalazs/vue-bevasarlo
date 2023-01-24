<template>
    <main>
        <div id="topinteractions" class="d-flex flex-row justify-content-between">
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#AddModal"><i
                    class="bi bi-plus"></i></button>
            <h1>A kosara</h1>
            <button class="btn btn-danger"><i class="bi bi-trash2-fill"></i></button>
        </div>
        <div id="cartitems">
            <CardComponent v-for="item in cartItems" :data="item" :key="item.id" />
        </div>
        <ModalWindow title="Új kosárelem hozzáadása" id="AddModal" :inputs="AddInputs" :buttons="AddButtons" />
    </main>
</template>
<script>
import ModalWindow from './Modal.vue';
import CardComponent from './Card.vue';
import axios from 'axios';
export default {
    name: 'MainSite',
    components: {
        ModalWindow,
        CardComponent
    },
    data() {
        return {
            cartItems: [],
            AddInputs: [
                {
                    name: 'Name',
                    title: 'Termék neve',
                    type: 'text',
                    required: true
                },
                {
                    name: 'Description',
                    title: 'Leírás',
                    type: 'text',
                    required: false
                },
                {
                    name: 'Count',
                    title: 'Mennyiség',
                    type: 'number',
                    changeEvent:true,
                    required:true
                },
                {
                    name: 'UnitPrice',
                    title: 'Egységár',
                    type: 'number',
                    changeEvent:true,
                    required:true
                },
                {
                    name: 'ImageName',
                    title: 'Kép',
                    type: 'file',
                    required:false
                }
            ],
            AddButtons: [
                {
                    name: 'add',
                    text: '',
                    icon: 'plus',
                    type: 'success',
                    function: this.AddItem
                }
            ]
        }
    },
    beforeMount(){
        this.GetCartItems();
    },
    computed: {
        ItemLength() {
            return this.cartItems.length;
        }
    },
    methods: {
        AddItem(data) {
            let dataToSend = {
                Name: data.Name == undefined ? null : data.Name,
                Description: data.Description == undefined ? null : data.Description,
                Count: data.Count == undefined ? null : data.Count,
                UnitPrice: data.UnitPrice == undefined ? null : data.UnitPrice,
                Price: data.Count * data.UnitPrice
            }
            if (document.querySelector('#file').value != "") {
                let form = this.GetFiles();
                axios.post('http://localhost:8080/files/upload', form, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => {
                    console.log(res.data);
                    dataToSend.ImageName = res.data.map(e => e.filename).join(';');
                    axios.post('http://localhost:8080/api/Tasks', dataToSend).then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.log(err.response);
                    })
                });
            }
            else{
                axios.post('http://localhost:8080/api/Tasks', dataToSend).then(res=>{
                    console.log(res);
                }).catch(err=>{
                    console.log(err.response);
                })
            }
            console.log(dataToSend)
        },
        GetFiles() {
            let form = new FormData();
            let files = document.querySelector('#file').files;
            if (files.length > 0) {
                for (let i = 0; i < files.length; i++) {
                    form.append("media", files[i]);
                }
            }
            return form;
        },
        GetCartItems(){
            axios.get('http://localhost:8080/api/Tasks').then(res=>{
                this.cartItems = res.data;
            })
        }
    }
}
</script>