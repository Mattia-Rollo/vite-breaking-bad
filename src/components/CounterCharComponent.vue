<template>

    <div class="container py-3">
        <strong>Found {{ store.count }} characters</strong>
    </div>
</template>

<script>
import { store } from '../assets/data/store'
export default {
    name: 'CounterCharComp',
    data() {
        return {
            store,

        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    background-color: #212529;
    color: white;
}
</style>