<script setup>
import RotatingCard from "@/examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "@/examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "@/examples/cards/rotatingCards/RotatingCardBack.vue";
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
      <h3>进入考试或查看成绩</h3>
      <div class="d-flex row justify-content-start mt-5 mb-5">
      <div class="col-md-3" v-for="exam in this.exams" :key="exam">
        <div class="card m-1 h-100">
          <RotatingCard>
            <RotatingCardFront
                image="https://bit.ly/3G5JXJZ"
                icon="touch_app"
                :title="exam.examName"
                :description="exam.examDesc"
            />

            <RotatingCardBack
                image="https://bit.ly/32ZoTGx"
                :title="exam.examName"
                description="Wishing you great success in your examination, may you achieve outstanding results!"
                :action="[
                  {
                    route: (exam.finish === '1') ? '#' : setQuestionRoute(exam),
                    label: (exam.finish === '1') ? '成绩：100' : '开始考试',
                    color: (exam.finish === '1') ? 'danger' : 'white'
                  },
                ]"
            />
          </RotatingCard>
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
      id: "",
    }
  },
  methods: {
    setQuestionRoute:function (exam){
      let route = ""
      route = '/questions?id=' + this.id + '&examId=' + exam.examId
      return route
    }
  },
  mounted () {
    this.searchParams = new URLSearchParams(window.location.search)
    this.id = this.searchParams.get("id")
    axios.get(('/api/sign_up/exam?id=' + this.id), {
    }).then(res => {
      this.exams = res.data
      // console.log(this.exams)
    }).catch(err => {
      alert('出错了：' + err.code)
    })
  }
}
</script>


<style scoped>

</style>