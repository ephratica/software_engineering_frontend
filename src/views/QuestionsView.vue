<script setup>
import MaterialButton from "@/components/MaterialButton.vue";
</script>

<template>
  <div class="container mt-lg-5">
    <div class="d-flex row justify-content-start">
      <div class="md-12" v-for="answer in this.answer_list" :key="answer">
        <h3>{{ answer.desc }}</h3>
        <div class="container" v-if="answer.isChoice">
          <div class="form-check">
            <input class="form-check-input" type="radio" :value="'A'" :name="answer.id" :id="'flexRadioA' + answer.id" v-model="answer.answer">
            <label class="form-check-label" :for="'flexRadioA' + answer.id">
              A
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" :value="'B'" :name="answer.id" :id="'flexRadioB' + answer.id"  v-model="answer.answer">
            <label class="form-check-label" :for="'flexRadioB' + answer.id">
              B
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" :value="'C'" :name="answer.id" :id="'flexRadioC' + answer.id"  v-model="answer.answer">
            <label class="form-check-label" :for="'flexRadioC' + answer.id">
              C
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" :value="'D'" :name="answer.id" :id="'flexRadioD' + answer.id"  v-model="answer.answer">
            <label class="form-check-label" :for="'flexRadioD' + answer.id">
              D
            </label>
          </div>
        </div>

        <div class="w-50 left-aligned" v-else>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">请输入答案</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" v-model="answer.answer"></textarea>
          </div>
          <MaterialButton
              @click="submit"
              variant="gradient"
              color="success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">
            交卷
          </MaterialButton>
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
      answer_list: [],
    }
  },
  methods: {
    submit: function (){
      let answer = [];
      for (let i in this.answer_list){
        let new_ans = {}
        new_ans.userId = 1
        new_ans.questionId = this.answer_list[i].id
        new_ans.answer = this.answer_list[i].answer
        answer.push(new_ans)
        console.log(this.answer_list[i])
      }
      axios.post('/api/take_exam',
        answer
      ).then(res => {
        this.success = res.data
        window.location.href = this.success ? '/StudentHome' : '#'
        // console.log(this.sign_up_result)
      }).catch(err => {
        alert('出错了：' + err.code)
      })
    }
  },
  mounted () {
    axios.get('/api/exam/content?id=2', {
    }).then(res => {
      this.answer_list = res.data
      // console.log(this.exams)
    }).catch(err => {
      alert('出错了：' + err.code)
    })
  }
}
</script>

<style scoped>
.form-control {
  border: 1px solid #d2d6da;
}
.left-aligned {
  text-align: left;
}
</style>