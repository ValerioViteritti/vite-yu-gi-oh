import { reactive } from 'vue'
// Importazione dell'API principale
export const store = reactive({
    charactersList: [],
    apiURl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0",
    loading: true,
    searchText: "",
    searchSelect: "",
    apiNameParam: "name",
});
// Importazione dell'API degli archetipi
export const archetypeList = reactive({
    archetypeArray: [],
    apiURl: "https://db.ygoprodeck.com/api/v7/archetypes.php",

});