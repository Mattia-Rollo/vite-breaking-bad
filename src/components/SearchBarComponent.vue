<template>
    <div class="container py-2">
        <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="searchCharacters">
            <div class="col-12">
                <input type="text" class="form-control" id="searchName" placeholder="searchName"
                    v-model="store.search.name">
            </div>
            <div class="col-12">
                <label class="visually-hidden" for="category">category</label>
                <select class="form-select" id="category" v-model="store.search.category">
                    <option selected value="">Chooise...</option>
                    <option value="Breaking Bad">Breaking bad</option>
                    <option value="Better Call Saul">Better Call Saul</option>
                </select>
            </div>

            <div class="col-12">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <div class="col-12">
                <button type="submit" @click="resetSearch()" class="btn btn-primary">Reset</button>
            </div>
        </form>
    </div>
</template>

<script>

import { store } from '../assets/data/store';
export default {
    name: 'SearchBarComponent',
    data() {
        return {
            store,
            search: '',
            statusOptions: [
                'Breacking bad',
                'Better call Saul'
            ],
        }
    },
    methods: {
        searchCharacters() {
            this.$emit('filterchar');
        },
        resetSearch() {
            store.search.category = '';
            store.search.name = '';
            this.$emit('filterchar');
        }
    }
    // props: {
    //     searchStatus: String,
    // },
}
</script>

<style lang="scss" scoped>

</style>