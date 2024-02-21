<script>
import axios from 'axios';
import CharacterItem from './CharacterItem.vue'
import SpinnerLoading from './SpinnerLoading.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            base_api_url: 'https://rickandmortyapi.com/api/character',
            characters: [],
            loading: true
        }
    },
    computed: {
        getResults() {

            return this.characters.length > 0 ? "Total results: " + this.characters.length : 'no results yet'
        }

    },
    mounted() {
        axios
            .get(this.base_api_url)
            .then((response) => {
                console.log(response.data.results)
                this.characters = response.data.results;
                this.loading = false;


            })
            .catch((error) => {
                console.log(error.message)
            })
    },
    components: {
        CharacterItem,
        SpinnerLoading
    }
}
/*Use a timeout to verify loader
setTimeout(()=>{
}, 3000)*/

</script>

<template>
    <main>
        <div class="container">


            <div class="filters">

                <!-- add name filter input -->
                <input type="text" placeholder="Type a name to search">

                <!-- add a select status filter -->
                <select name="status" id="status">
                    <option value="" selected>All</option>
                    <option value="alive">Alive</option>
                    <option value="death">Death</option>
                    <option value="unknown">Unknown</option>
                </select>

            </div>


            <div class="row" v-if="!loading">
                <CharacterItem v-for="character in characters" :key='character.id + "_character"'
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