<script setup>
import { ref } from "vue";
import counterStore from "./store/CounterStore";
const counter = counterStore();
const data = ref();

const IncrementData = () => {
  counter.increment();
};
const DecreMentData = () => {
  if (counter.count > 0) {
    counter.decrement();
  }
};
</script>

<template>
  <h1 class="text-3xl text-blue-700 bg-red-50">
    Counter data{{ counter.count }}
  </h1>
  <h3>{{ counter.doubleCount }}</h3>
  <button
    @click="IncrementData()"
    class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
  >
    Plus
  </button>
  <button
    @click="DecreMentData()"
    class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
  >
    Minus
  </button>
</template>
