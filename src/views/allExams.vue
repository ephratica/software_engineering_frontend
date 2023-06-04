<script setup>
import BackgroundBlogCard from "@/examples/cards/blogCards/BackgroundBlogCard.vue";
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import CenteredFooter from "@/examples/footers/FooterCentered.vue";
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
      <h3>选择您要报名的考试</h3>
      <div class="d-flex row justify-content-start mt-5 mb-5">
        <div class="col-md-3" v-for="exam in this.exams" :key="exam">
          <div class="card m-1">
            <BackgroundBlogCard
                image='/resources/north.jpeg'
                :title="exam.name"
                :description="exam.desc "
                :price="'price: ￥' + exam.price"
                :action=this.action
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
      this.action.route = "/pay"
      this.action.label = "报名考试"
      this.action.color = "white"
      // console.log("fuck")
    }).catch(err => {
      alert('出错了：' + err.code)
    })
  },
  methods: {
  }
}
</script>


<style scoped>

</style>