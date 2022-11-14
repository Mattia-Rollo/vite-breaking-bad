<template>
    <div class="container">
        <div class="row row-cols-3 row-cols-lg-5 g-4 py-2">
            <div v-for="(item, index) in list" class="col" :key="index">
                <div class="mycard">

                    <img :src="item.img" alt="">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'CharactersList',
    data() {
        return {
            apiURL: 'https://www.breakingbadapi.com/api/characters',
            list: []
        }
    },
    methods: {
        getImage() {
            axios.get(this.apiURL).then(
                (res) => {
                    console.log(res.data);
                    this.list = [...res.data];
                    console.log(this.list)
                }
            )
        }
    },
    created() {
        this.getImage();
    }
}
</script>

<style lang="scss" scoped>
.mycard {
    padding: 1rem;
    background-color: #2e3a46;
}

img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}
</style>