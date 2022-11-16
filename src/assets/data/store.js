import { reactive } from "vue";

export const store = reactive({
  count: 0,
  apiURL: "https://www.breakingbadapi.com/api/",
  characterList: [],
  loading: false,
  name: "",
  search: {
    category: "",
  },
  errormessage: "",
});
