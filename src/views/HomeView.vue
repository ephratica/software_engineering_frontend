<script setup>
import TheWelcome from '../components/TheWelcome.vue'

</script>

<template>
  <main>
    <TheWelcome />
    <button type="button" onclick="window.location.href='/StudentHome'" class="btn btn-success m-1">Student</button>
    <button type="button" onclick="window.location.href='/TeacherHome'" class="btn btn-success m-1">Teacher</button>

  </main>
</template>

<style scoped>

</style>
