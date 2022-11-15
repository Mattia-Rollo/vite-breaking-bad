<template>
    <div class="container py-2">
        <form class="row row-cols-lg-auto g-3 align-items-center">
            <div class="col-12">



                <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">

            </div>
            <div class="col-12">
                <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
                <select class="form-select" id="inlineFormSelectPref">
                    <option selected value="Breaking bad">Breacking bad</option>
                    <option value="Better Call Saul">Better Call Saul</option>
                </select>
            </div>

            <div class="col-12">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Reset</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SearchBarComponent',
    data() {
        return {
            statusOptions: [
                'Breacking bad',
                'Better call Saul'
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

</style>