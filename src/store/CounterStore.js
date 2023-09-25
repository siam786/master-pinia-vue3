import { defineStore } from "pinia";

const counterStore = defineStore({
  id:'counter',
  state:()=>( {
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement(){
      this.count--;
    }
  },
});

export default counterStore;
