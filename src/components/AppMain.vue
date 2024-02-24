<script>

import { store } from '../store.js'
import CharacterItem from './CharacterItem.vue'
import SpinnerLoading from './SpinnerLoading.vue'
import ResultsFilter from './ResultsFilter.vue'
import TotalResults from './TotalResults.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    methods: {
        filterResults(data) {
            // ?name=rick&status=dead
            const [searchText, selectStatus] = data;
            const url = store.base_api_url + '?name=' + searchText + '&status=' + selectStatus
            console.log(url);
            console.log(store)
            store.getCharacters(url)
            store.error = false
        }

    },

    created() {
        console.log(store.base_api_url)
        store.getCharacters(store.base_api_url);

    },
    components: {
        CharacterItem,
        SpinnerLoading,
        ResultsFilter,
        TotalResults
    }
}
/*Use a timeout to verify loader
setTimeout(()=>{
}, 3000)*/

</script>

<template>
    <main>
        <div class="container">

            <ResultsFilter @filtered="filterResults"></ResultsFilter>



            <div class="row" v-if="!store.loading">
                <div v-if="store.error" class="try-again"> Try another filter</div>
                <CharacterItem v-else v-for="character in store.characters" :key='character.id + "_character"'
                    :character_item="character">
                </CharacterItem>
            </div>

            <SpinnerLoading v-else> </SpinnerLoading>


            <TotalResults></TotalResults>
        </div>

    </main>
</template>



<style scoped>
.try-again {
    color: red;
    height: 150px;
    font-size: larger;
    padding: 1rem;

}
</style>