<script>
import axios from 'axios';
import CharacterItem from './CharacterItem.vue'
import SpinnerLoading from './SpinnerLoading.vue'
import ResultsFilter from './ResultsFilter.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            base_api_url: 'https://rickandmortyapi.com/api/character',
            characters: [],
            loading: true,
            error: ''
        }
    },
    methods: {
        getCharacters(url) {
            axios
                .get(url)
                .then((response) => {
                    console.log(response.data.results)
                    this.characters = response.data.results;
                    this.loading = false;


                })
                .catch((error) => {
                    console.log(error.response.data.error)
                    this.error = error.response.data.error;

                })
        },
        filterResults(data) {
            // ?name=rick&status=dead
            const [searchText, selectStatus] = data;
            const url = this.base_api_url + '?name=' + searchText + '&status=' + selectStatus
            console.log(url);
            this.getCharacters(url)
            this.error = ''
        }

    },
    computed: {
        getResults() {

            return this.characters.length > 0 ? "Total results: " + this.characters.length : 'no results yet'
        }

    },
    mounted() {
        this.getCharacters(this.base_api_url);

    },
    components: {
        CharacterItem,
        SpinnerLoading,
        ResultsFilter
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



            <div class="row" v-if="!loading">
                <div v-if="error" style="color: red;"> {{ error }}</div>
                <CharacterItem v-else v-for="character in characters" :key='character.id + "_character"'
                    :character_item="character">
                </CharacterItem>
            </div>

            <SpinnerLoading v-else> </SpinnerLoading>


            <div>
                {{ getResults }}
            </div>
        </div>

    </main>
</template>



<style scoped></style>