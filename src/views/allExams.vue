<script setup>
import BackgroundBlogCard from "@/examples/cards/blogCards/BackgroundBlogCard.vue";
</script>

<template>
  <div class="container mt-lg-5">
    <div class="d-flex row justify-content-start">
      <div class="col-md-3" v-for="exam in this.exams" :key="exam">
        <div class="card m-1">
          <BackgroundBlogCard
              image='/resources/north.jpeg'
              :title="exam.name"
              :description="exam.desc + 'price: ￥' + exam.price"
              :action=this.action
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