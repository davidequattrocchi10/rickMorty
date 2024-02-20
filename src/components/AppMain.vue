<script>
import axios from 'axios';
import CharacterItem from './CharacterItem.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            base_api_url: 'https://rickandmortyapi.com/api/character',
            characters: []
        }

    },
    mounted() {
        console.log(this.base_api_url)

        axios
            .get(this.base_api_url)
            .then((response) => {
                console.log(response.data.results)
                this.characters = response.data.results;
                console.log(this.characters)


            })
            .catch((error) => {
                console.log(error.message)
            })

    },
    components: {
        CharacterItem
    }
}

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



            <div class="row">
                <CharacterItem v-for="character in characters" :key='character.id + "_character"'
                    :character_item="character">
                </CharacterItem>

            </div>
        </div>

    </main>
</template>



<style scoped></style>