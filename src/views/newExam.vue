<template>
  <div class="container mt-5">
    <div class="card shadow">
      <div class="card-header">
        <h1 class="card-title">发布试题</h1>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="number" class="form-label">题目编号：</label>
            <input v-model="number" id="number" type="number" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="type" class="form-label">题目类型：</label>
            <select v-model="type" id="type" class="form-select" required>
              <option value="">请选择题目类型</option>
              <option value="选择题">选择题</option>
              <option value="大题">大题</option>
            </select>
          </div>
          <div v-if="type === '选择题'">
            <div class="mb-3">
              <label for="question" class="form-label">题目：</label>
              <input v-model="question" id="question" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="optionA" class="form-label">选项A：</label>
              <input v-model="this.optionA" id="optionA" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="optionB" class="form-label">选项B：</label>
              <input v-model="this.optionB" id="optionB" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="optionC" class="form-label">选项C：</label>
              <input v-model="this.optionC" id="optionC" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="optionD" class="form-label">选项D：</label>
              <input v-model="this.optionD" id="optionD" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">题目描述：</label>
              <textarea v-model="description" id="description" class="form-control" required></textarea>
            </div>
            <div class="mb-3">
              <label for="answer" class="form-label">答案：</label>
              <select v-model="answer" id="answer" class="form-select" required>
                <option value="">请选择答案</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
          </div>
          <div v-if="type === '大题'">
            <div class="mb-3">
              <label for="question" class="form-label">题目：</label>
              <input v-model="question" id="question" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">题目描述：</label>
              <textarea v-model="description" id="description" class="form-control" required></textarea>
            </div>
            <div class="mb-3">
              <label for="answer" class="form-label">答案：</label>
              <textarea v-model="answer" id="answer" class="form-control" required></textarea>
            </div>
          </div>
          <div class="mb-3">
            <label for="score" class="form-label">分值：</label>
            <input v-model="score" id="score" type="number" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="exam" class="form-label">考试：</label>
            <select v-model="exam" id="exam" class="form-select" required>
              <option value="">请选择考试</option>
              <option v-for="exam in exams" :key="exam.id" :value="exam.id">{{ exam.name }}</option>
            </select>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">发布</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ElNotification } from "element-plus";
export default {
  data() {
    return {
      number:0,
      type: '',
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      answer: '',
      description: '',
      score: 0,
      exam: '',
      exams: [],
      isChoice: false,
      desc:'',
    }
  },
  created() {
    axios.get('/api/exam/all')
      .then(response => {
        this.exams = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {

    submitForm() {
      console.log(this.type)
      if(this.type==='选择题'){
        this.isChoice = true
        this.desc = this.question+':\nA:'+this.optionA+'\nB: '+this.optionB+'\nC: '+this.optionC+'\nD: '+this.optionD
      }
      else{
        this.desc = this.question
      }
      const data = {
        id:null,
        examId: this.exam,
        number: this.number,
        isChoice:this.isChoice,
        desc:this.desc,
        stdAnswer:this.answer,
        maxScore:this.score
      }
      console.log(this.exam,data)
      
      axios.put('/api/question/add', data)
      .then(response => {
        if(response.data==='success'){
          ElNotification({
            title: '提交成功',
            message: "试卷已刷新",
            type: "success",
            duration: 3000
          })
        }
        else{
          ElNotification({
            title: '提交失败',
            message: "请重新尝试",
            type: "error",
            duration: 3000
          })
        }
      })
      .catch(error => {
        console.log(error)
        // 可以在这里添加错误提示等
      })
    }
  }
}
</script>

<style>
.card {
  max-width: 500px;
  margin: 0 auto;
}
</style>
