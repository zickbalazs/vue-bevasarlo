<template>
    <div class="container-fluid px-0">
        <main class="d-flex flex-column">
            <div id="topinteractions"
                class="d-flex flex-row text-light justify-content-between w-100 mx-0 px-0 mb-3 bg-primary bg-gradient sticky-top">
                <button class="btn btn-success rounded-0" data-bs-toggle="modal" data-bs-target="#AddModal"><i
                        class="bi bi-plus"></i></button>
                <h1>A kosara</h1>
                <button class="btn btn-danger rounded-0" @click="DeleteAll"><i class="bi bi-trash2-fill"></i></button>
            </div>
            <div id="cartitems" class="container-fluid row mx-auto flex-row">
                <CardComponent v-for="item in cartItems" :data="item" :key="item.id" />
            </div>
            <ModalWindow title="Új kosárelem hozzáadása" id="AddModal" :inputs="AddInputs" :buttons="AddButtons" />
            <div>
            </div>
        </main>
        <FooterComponent :cart-data="cartItems" />
    </div>
</template>
<style>
.container-fluid {
    display: flex;
    flex-flow: column;
}

.container-fluid,
main {
    flex: 1 1 auto;
}
</style>
<script>
import FooterComponent from './FooterComponent.vue';
import ModalWindow from './Modal.vue';
import CardComponent from './Card.vue';
import axios from 'axios';
import { Item } from '../classes/Item';
export default {
    name: 'MainSite',
    components: {
        ModalWindow,
        CardComponent,
        FooterComponent
    },
    data() {
        return {
            cartItems: [],
            AddInputs: [
                {
                    name: 'Name',
                    title: 'Termék neve',
                    type: 'text',
                    placeholder: 'Terméknév',
                    required: true
                },
                {
                    name: 'Description',
                    title: 'Leírás',
                    type: 'text',
                    placeholder: 'Ez egy leírás',
                    required: false
                },
                {
                    name: 'Count',
                    title: 'Mennyiség',
                    type: 'number',
                    placeholder: '12',
                    changeEvent: true,
                    required: true
                },
                {
                    name: 'UnitPrice',
                    title: 'Egységár',
                    type: 'number',
                    placeholder: '150',
                    changeEvent: true,
                    required: true,
                    grouped: true,
                    groupinput: {
                        name: 'Unit',
                        type: 'text',
                        placeholder: 'kg'
                    }
                },
                {
                    name: 'ImageName',
                    title: 'Kép',
                    type: 'file',
                    required: false
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
    beforeMount() {
        this.GetCartItems();
    },
    methods: {
        DeleteAll() {
            if (confirm('Biztosan törölni szeretne minden elemet?')) {
                axios.delete('http://localhost:8080/api/Tasks').then(res => {
                    this.cartItems.splice(0, this.cartItems.length)
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            }
        },
        AddItem(data) {
            let dataToSend = {
                Name: data.Name == undefined ? null : data.Name,
                Description: data.Description == undefined ? null : data.Description,
                Count: data.Count == undefined ? null : data.Count,
                UnitPrice: data.UnitPrice == undefined ? null : data.UnitPrice,
                Unit: data.Unit == undefined ? null : data.Unit,
                Price: data.Count * data.UnitPrice
            }
            if (document.querySelector('#file').value != "") {
                let form = this.GetFiles();
                axios.post('http://localhost:8080/files/upload', form, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => {
                    console.log(res.data);
                    dataToSend.ImageName = res.data.map(e => e.filename).join(';');
                    axios.post('http://localhost:8080/api/Tasks', dataToSend).then(res => {
                        console.log(res);
                        alert('Sikeres felvétel');
                        this.cartItems.push(dataToSend);
                    }).catch(err => {
                        alert('Hibás adatok!')
                        console.log(err.response);
                    })
                });
            }
            else {
                axios.post('http://localhost:8080/api/Tasks', dataToSend).then(res => {
                    console.log(res);
                    alert('Sikeres felvétel');
                    this.cartItems.push(dataToSend);
                }).catch(err => {
                    data = {};
                    alert('Hibás adatok!')
                    console.log(err.response);
                })
            }
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
        GetCartItems() {
            axios.get('http://localhost:8080/api/Tasks').then(res => {
                this.cartItems = res.data.map(e => new Item(e));
                console.log(res.data);
            })
        }
    }
}
</script>