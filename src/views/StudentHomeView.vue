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
      <div class="col-12 d-flex justify-content-center mt-4 mb-4">
        <div class="col-12 d-flex row justify-content-center">
          <div class="col col-lg-6">
            <TransparentBlogCard
                image="../resources/sign.jpg"
                title="报名系统"
                description="CET笔试的考试时间为每年6月和12月；CET口试的考试时间为每年5月和11月，报考口试的考生必须先报考当次相应级别的笔试。"
                :action="{
                label: '立即报名>>>',
                route: '/allExams?id=' + this.id,
                color: 'success',
              }"
            />
          </div>
          <div class="col col-lg-6">
            <TransparentBlogCard
                image="../resources/exam.jpg"
                title="考试系统"
                description="CET笔试现在支持在线考试，请准备好双机位摄像头、麦克风，进入考试系统答题。或查看已完成的考试成绩。"
                :action="{
                label: '进入考试>>>',
                route: '/stuExams?id=' + this.id,
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