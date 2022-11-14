<template>
    <div class="container py-3">
        <strong>Found {{ counter }} characters</strong>
    </div>
</template>

<script>
export default {
    name: 'CounterCharComp'
}
</script>

<style lang="scss" scoped>
.container {
    background-color: #212529;
    color: white;
}
</style>