import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({

    //state
    base_api_url: 'https://rickandmortyapi.com/api/character',
    characters: [],
    loading: true,
    error: false,



    //action
    getCharacters(url) {
        axios
            .get(url)
            .then((response) => {
                console.log(response.data.results)
                this.characters = response.data.results;
                this.loading = false;
                this.error = false;


            })
            .catch((error) => {
                console.error(error.response.data.error)
                this.error = true;

            })
    }


})