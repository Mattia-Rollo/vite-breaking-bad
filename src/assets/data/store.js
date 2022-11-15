import { reactive } from "vue";

export const store = reactive({
  count: 0,
  apiURL: "https://rickandmortyapi.com/api/",
  characterList: [],
  loading: false,
  search: {
    category: "",
    name: "",
  },
  errormessage: "",
});
