<script setup>
import TransparentBlogCard from "@/examples/cards/blogCards/TransparentBlogCard.vue";
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
</script>

<template>
  <div class="container mt-lg-5">
    <NavbarDefault :sticky="false" title="Student Home"/>
    <div class="row mt-5">
      <div class="col-12 d-flex justify-content-center">
        <div class="col-12 d-flex row justify-content-center">
          <div class="col col-lg-6">
            <TransparentBlogCard
                image="https://bit.ly/3HH2M6E"
                title="报名系统"
                description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                :action="{
                label: '立即报名>>>',
                route: '/allExams',
                color: 'success',
              }"
            />
          </div>
          <div class="col col-lg-6">
            <TransparentBlogCard
                image="https://bit.ly/3HH2M6E"
                title="考试系统"
                description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                :action="{
                label: '进入考试>>>',
                route: '/stuExams',
                color: 'success',
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>