<script setup>
import RotatingCard from "@/examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "@/examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "@/examples/cards/rotatingCards/RotatingCardBack.vue";
</script>

<template>
  <div class="container">
    <div class="d-flex row justify-content-start">
      <div class="col-md-3" v-for="flight in this.flights" :key="flight">
        <div class="card m-1">
          <RotatingCard>
            <RotatingCardFront
                image="https://bit.ly/3G5JXJZ"
                icon="touch_app"
                title="Feel the <br /> Material Kit"
                description="All the Bootstrap components that you need in a development have been re-design with the new look."
            />

            <RotatingCardBack
                image="https://bit.ly/32ZoTGx"
                title="Discover More"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                :action="[
                {
                  route: '/',
                  label: 'Start with Headers',
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
    mounted () {
      axios.get('/api/sign_up', {
        id: "cjy",
      }).then(res => {
        this.exams = res.data
      }).catch(err => {
        alert('出错了：' + err.code)
      })
    }
  }
}
</script>


<style scoped>

</style>