<script>
export default {
    name: 'ResultsFilter',
    emits: ['filtered'],
    data() {
        return {
            searchText: '',
            selectStatus: ''
        }
    },
    methods: {

        // function emit() can be used also in this way

        /* filterResults() {
             console.log(this.searchText);
             console.log(this.selectStatus);
             this.$emit('filtered', [this.searchText, this.selectStatus])
         }*/
    }

}
</script>

<template>
    <div class="filters">

        <!-- add name filter input -->

        <input name='searchText' type="text" placeholder="Type a name to search" v-model="searchText">



        <!-- add a select status filter -->
        <select name="status" id="status" v-model="selectStatus">
            <option value="" selected>All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>


        <button @click="$emit('filtered', [searchText, selectStatus])"> Filter </button>

        <!-- function emit() can be used also in this way -->
        <!-- <button @click="filterResults()">Filter</button> -->
    </div>
</template>



<style scoped>
.filters {
    margin-top: 1rem;

    input,
    select,
    button {
        padding: 0.5rem;
        margin: 0.1rem;
        border-radius: 0.25rem;
        border-style: none;
        font-weight: bold;


    }
}
</style>