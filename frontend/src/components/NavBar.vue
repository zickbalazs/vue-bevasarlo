<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Bevásárló</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(item) in links" :key="item.location">
                        <router-link :to="item.url" class="nav-link">{{ item.location }}</router-link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</template>
<style>

</style>
<script>

export default {
    name: 'NavBar',
    data() {
        return {
            links: [
                {
                    location: 'Főoldal',
                    url:'/'
                },
                {
                    location: 'Módosítás',
                    url:'/edit'
                }
            ]
        }
    }
}
</script>