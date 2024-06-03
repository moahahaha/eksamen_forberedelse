<script setup>

import {ref, onMounted } from 'vue'
import axios from 'axios';
import { template } from 'document/lib/lang';

const testData = ref([]);

function get_test_data() {
  axios.get('/test')
  .then(response => {
    testData.value = response.testData
  })
  .catch(error => {
    console.error('There was an error fetching the data:', error)
  })

}

onMounted(get_test_data) 

return {
  testData
}


</script>


<template>
  <div class="list-container">
    <h2>Test Data List</h2>
    <ul class="test-list">
      <li v-for="item in testData" :key="item" class="test-item">{{ item }}</li>
    </ul>
  </div>
</template>
