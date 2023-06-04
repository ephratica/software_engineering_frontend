<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <div class="container py-7">
    <div class="row mt-5">
      <div class="col-sm-3 col-6 mx-auto">
        <h2>考试名称：</h2>
        <h2>应付金额：</h2>
        <!-- Button trigger modal -->
        <MaterialButton
            variant="gradient"
            color="success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal">
          立即支付
        </MaterialButton>

        <!-- Modal -->
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  请扫支付宝二维码进行支付
                </h5>
                <MaterialButton
                    color="none"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close">
                </MaterialButton>
              </div>
              <div class="modal-body">
                <img src="../../resources/pay.jpg" class="img-fluid shadow rounded-4">
              </div>
              <div class="modal-footer justify-content-between">
                <MaterialButton
                    variant="gradient"
                    color="dark"
                    data-bs-dismiss="modal">
                  取消支付
                </MaterialButton>
                <MaterialButton variant="gradient" color="success" class="mb-0 " @click="payButtonClick">
                  我已付款
                </MaterialButton>
              </div>
            </div>
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
      sign_up_result: 0
    }
  },
  mounted () {
    this.searchParams = new URLSearchParams(window.location.search)
    this.id = this.searchParams.get("id")
    this.examId = this.searchParams.get("examId")
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
        console.log(this.sign_up_result)
      }).catch(err => {
        // alert('出错了：' + err.code)
        alert("支付失败！请勿重复报名！")
      })
    }
  },
}
</script>

<style scoped>

</style>