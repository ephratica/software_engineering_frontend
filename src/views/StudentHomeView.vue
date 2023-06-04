<script setup>
import TransparentBlogCard from "@/examples/cards/blogCards/TransparentBlogCard.vue";
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" title="Student Home" home="student home"/>
      </div>
    </div>
  </div>

  <Header>
    <div
        class="page-header min-vh-75"
        :style="`background-image: url(${vueMkHeader})`"
        loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
                class="text-white pt-3 mt-n5 me-2"
                :style="{ display: 'inline-block ' }"
            >
              欢迎使用CET考试报名系统
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              May your diligent preparation, unwavering determination, and
              sharp intellect guide you towards achieving outstanding results
              that reflect your true potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <div class="container mt-lg-5">
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
  </div>
</template>

<style scoped>

</style>