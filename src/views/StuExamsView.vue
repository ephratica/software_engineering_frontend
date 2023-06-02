<script setup>
import RotatingCard from "@/examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "@/examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "@/examples/cards/rotatingCards/RotatingCardBack.vue";
</script>

<template>
  <div class="container mt-lg-5">
    <div class="d-flex row justify-content-start">
      <div class="col-md-3" v-for="exam in this.exams" :key="exam">
        <div class="card m-1">
          <RotatingCard>
            <RotatingCardFront
                image="https://bit.ly/3G5JXJZ"
                icon="touch_app"
                :title="exam.name"
                :description="exam.desc"
            />

            <RotatingCardBack
                image="https://bit.ly/32ZoTGx"
                :title="exam.name"
                description="Wishing you great success in your examination, may you achieve outstanding results!"
                :action="[
                  {
                    route: '/',
                    label: '开始考试',
                  },
                ]"
            />
          </RotatingCard>
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
      exams: []
    }
  },
  methods: {
  },
  mounted () {
    axios.get('/api/sign_up?id=1', {
    }).then(res => {
      this.exams = res.data
      console.log("fuck")
    }).catch(err => {
      alert('出错了：' + err.code)
    })
  }
}
</script>


<style scoped>

</style>