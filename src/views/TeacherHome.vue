<script setup>
import TransparentBlogCard from "@/examples/cards/blogCards/TransparentBlogCard.vue";
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import CenteredFooter from "@/examples/footers/FooterCentered.vue";
import Header from "../examples/Header.vue";
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" title="Teacher Home" home="student home"/>
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
              欢迎使用CET考试教师系统
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
      <div class="col-12 d-flex justify-content-center mt-4 mb-4">
        <div class="col-12 d-flex row justify-content-center">
          <div class="col col-lg-6">
            <TransparentBlogCard
                image="../resources/sign.jpg"
                title="判卷系统"
                description="您将会给出学生在选定考试中大题的分数"
                :action="{
                label: '立即判卷>>>',
                route: '/JudgeHome?id=' + this.id,
                color: 'success',
              }"
            />
          </div>
          <div class="col col-lg-6">
            <TransparentBlogCard
                image="../resources/exam.jpg"
                title="出卷系统"
                description="您将会进入出卷界面，在该界面中需要您给出所有题目的问题以及选择题的正确选项"
                :action="{
                label: '进入出卷>>>',
                route: '/newExam?id=' + this.id,
                color: 'success',
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  <CenteredFooter />
</template>

<script>
import axios from "axios";

export default {
  name: "stu-exams",
  components: {
  },
  data: function () {
    return {
      id: ""
    }
  },
  mounted () {
    this.searchParams = new URLSearchParams(window.location.search)
    this.id = this.searchParams.get("id")
  },
  methods: {
  }
}
</script>

<style scoped>

</style>