import { reactive } from 'vue'

export const store = reactive({
    charactersList: [],
    apiURl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0",
    loading: true,
    searchText: "",
    searchSelect: "",
    apiNameParam: "name",
});