<script setup>
import {ref, onMounted } from 'vue'


setup() {
  const testData = ref([]);


  function get_test_data() {
    try{
      const response = await fetch('http://10.0.0.156:80/test')
      const data = await response.json()
      testData.value = data.test

    } catch(error) {
      console.error('There was an error fetching the data:', error)
    }
  }

  onMounted(get_test_data) 

  return {
    testData,
    get_test_data
  }


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
