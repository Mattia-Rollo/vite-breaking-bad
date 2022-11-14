<template>
    <div class="container">
        <div class="row row-cols-5 g-1">
            <div v-for="(item, index) in list" class="col" :key="index">
                <div class="card" style="width: 18rem;">

                    <img :src="item.img" alt="" class="card-img-top">
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

</style>