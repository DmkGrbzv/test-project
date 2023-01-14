import axios from "axios";
import { defineStore } from "pinia";
export const useAppStore = defineStore("appStore", {
  state: () => {
    return {
      dogsData: [],
      dataIsLoaded: false,
    };
  },
  getters: {
    getAllDogsData() {
      return this.dogsData;
    },
    getDataIsLoadedValue() {
      return this.dataIsLoaded;
    },
  },
  actions: {
    async fetchingDogsData() {
      await axios
        .get("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
        .then((response) => {
          this.dogsData = response.data;
          this.dataIsLoaded = true;
        });
      console.log(this.dogsData);
    },
  },
});
