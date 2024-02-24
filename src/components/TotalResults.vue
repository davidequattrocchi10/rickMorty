<script>

import { store } from '../store.js'

export default {
    name: 'TotalResults',
    data() {
        return {
            store
        }
    },
    computed: {
        getResults() {
            return !store.error ? "Total results: " + store.characters.length : 'no results'
        }

    }
}
</script>

<template>
    <div>
        {{ getResults }}
    </div>
</template>



<style scoped></style>