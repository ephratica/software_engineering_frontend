<script setup>
import CenteredBlogCard from "@/examples/cards/blogCards/CenteredBlogCard.vue";
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import CenteredFooter from "../examples/footers/FooterCentered.vue"
import Header from "../examples/Header.vue";
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" title="Teacher Home" home="teacher home"/>
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
      <h3>选择您要批改的考试</h3>
    <div class="d-flex row justify-content-start mt-7 mb-7">
      <div class="col-md-3" v-for="exam in this.exams" :key="exam">
        <div class="card m-1 h-100">
          <CenteredBlogCard
              image="https://bit.ly/3q0AlKO"
              :title="exam.name"
              :description="exam.desc"
              :method="toJudge"
          />
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
      exams: [],
      action: {}
    }
  },
  mounted () {
    axios.get('/api/exam/all', {
    }).then(res => {
      this.exams = res.data
      // console.log("fuck")
    }).catch(err => {
      alert('出错了：' + err.code)
    })
  },
  methods: {
    toJudge:function (){
      window.location.href='/judge'
    }
  }
}
</script>


<style scoped>

</style>