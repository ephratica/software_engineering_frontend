<script setup>
import CenteredBlogCard from "@/examples/cards/blogCards/CenteredBlogCard.vue";
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
</script>

<template>
  <div class="container mt-lg-5">
    <NavbarDefault :sticky="false" title="Teacher Home"/>
    <div class="d-flex row justify-content-start mt-5">
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