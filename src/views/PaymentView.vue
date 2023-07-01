<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
    <div class="container py-7">
      <div class="row mt-5">
        <div class="col-sm-5 mx-auto">
          <div class="card card-background">
            <div
                class="full-background"
                :style="{ backgroundImage: `url(/public/resources/Money_Cash.jpg)` }"
                loading="lazy"
            ></div>
            <div class="card-body mt-5 mb-5">
              <h2 class="card-title">考试名称: {{this.examToPay.name}}</h2>
              <h2 class="card-title">应付金额：￥{{this.examToPay.price}}</h2>
              <!--      <h6 class="card-subtitle mb-2 text-muted">请确认您的考试信息</h6>-->
              <p class="card-text">请确认您的考试信息</p>
              <MaterialButton
                  variant="gradient"
                  color="success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                立即支付
              </MaterialButton>
            </div>
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
      sign_up_result: 0,
      examToPay: {}
    }
  },
  mounted () {
    this.searchParams = new URLSearchParams(window.location.search)
    this.id = this.searchParams.get("id")
    this.examId = this.searchParams.get("examId")

    axios.get('/api/pay?examId=' + this.examId).then(res => {
      this.examToPay = res.data
    }).catch(err => {
      alert('出错了：' + err.code)
      // alert("支付失败！请勿重复报名！")
    })
  },
  methods: {
    payButtonClick: function () {
      axios.post('/api/sign_up', {
        userId: this.id,
        examId: this.examId,
      }).then(res => {
        this.sign_up_result = res.data
        let target = this.sign_up_result ? ('/StudentHome?id=' + this.id) : '#'
        window.location.replace(target)
        // console.log(this.sign_up_result)
      }).catch(err => {
        // alert('出错了：' + err.code)
        alert("支付失败！请勿重复报名！" + err.code)
      })
    }
  },
}
</script>

<style scoped>

</style>